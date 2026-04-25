# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js 16 caveat (read first)

This project uses **Next.js 16.2.4 with Turbopack and React 19.2**. The framework has breaking changes from APIs you may have learned earlier — APIs, conventions, and file structure may all differ from your training data. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

Two specific changes that bite:

- **`proxy.ts`, not `middleware.ts`.** Edge interception lives in `proxy.ts` at the repo root, exporting `export function proxy(request: NextRequest)` and a `config.matcher`. There is no `middleware.ts`.
- **App Router only.** Routes live in `app/`; there is no `pages/` directory.

## Commands

```bash
npm run dev     # next dev (Turbopack)
npm run build   # next build
npm run start   # next start
npm run lint    # eslint (flat config in eslint.config.mjs)
```

There is no test runner configured. Don't invent one.

## Architecture

### Case-study content pipeline

Case studies are the only "content" in this site, and they are **TypeScript modules**, not Markdown or JSON. Each case study lives at `content/case-studies/<slug>.tsx` and exports four named symbols:

- `meta: CaseStudyMeta` — slug, title, role, period, tags, impact metrics, showcase images, OG image.
- `toc: { id, heading }[]` — narrative section anchors.
- `Narrative: () => JSX` — the long-form body, styled via the `.prose-cs` class in `app/globals.css`.
- `markdown: string` — raw markdown mirror served from `/work/<slug>.md` for `llms.txt` consumers.

`lib/case-studies.ts` aggregates the modules into a single `CASE_STUDIES` tuple (`getAllCaseStudies`, `getAllSlugs`, `getCaseStudyMeta`). Adding a new case study requires three coordinated changes:

1. Create `content/case-studies/<slug>.tsx` with the four exports above.
2. Import the module and add it to the `CASE_STUDIES` tuple in `lib/case-studies.ts`.
3. Create `app/work/<slug>/page.tsx` and `app/work/<slug>/md/route.ts` by copying the `katanapim/` pair and swapping the import.

The sitemap (`app/sitemap.ts`) and `llms.txt` (`app/llms.txt/route.ts`) iterate `getAllSlugs()` / `getAllCaseStudies()`, so they pick up new entries automatically.

### Markdown content negotiation

`proxy.ts` rewrites two cases onto the same `/md` route handler:

- `GET /work/<slug>.md` → `/work/<slug>/md` (URL form).
- `GET /work/<slug>` with `Accept: text/markdown` and no `text/html` → `/work/<slug>/md` (content negotiation for `llms.txt` clients).

Both eventually hit `app/work/<slug>/md/route.ts`, which returns the `markdown` export from the matching content module.

### Styling

- **Tailwind v4** via `@tailwindcss/postcss`. There is no `tailwind.config.*` file — theme tokens live inside `@theme inline { ... }` in `app/globals.css`, mapped to CSS variables on `:root`.
- **Design tokens** to know about: `--background` (cream), `--ink` (near-black), `--vivid` (yellow accent), `--olive` (dark khaki), `--surface`, plus `--font-heading` (Archivo Black) and `--font-mono` (JetBrains Mono).
- **All `border-radius` is forced to 0** by `* { border-radius: 0 !important; }` in the base layer. The portfolio is intentionally hard-edged; do not add rounded corners without removing that rule.
- **shadcn** is configured (`components.json`, style `radix-lyra`, base color `neutral`, icons via `phosphor`). Generated primitives go to `components/ui/`. Page-level components live directly in `components/`.
- **Long-form prose** uses the `.prose-cs` class defined in `globals.css` — it styles `h2/h3/p/ul/li/code/blockquote` for the case-study `Narrative` JSX.

### Path alias

`@/*` resolves to the repo root (see `tsconfig.json`). Use it for all internal imports (`@/components/...`, `@/lib/...`, `@/content/...`).

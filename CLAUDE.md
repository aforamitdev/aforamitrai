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

## Project layout

```
app/                 # App Router routes (layout.tsx, page.tsx, work/<slug>/, stack/, sitemap.ts, robots.ts, llms.txt/)
components/          # Page-level React components (hero, about, experience, footer, etc.)
components/ui/       # shadcn-generated primitives
components/case-study/ # Case-study-specific UI building blocks
content/case-studies/  # Per-slug TypeScript content modules (one file per case study)
lib/                 # Aggregators and helpers (case-studies.ts, stack.ts, utils.ts)
public/              # Static assets served at /
proxy.ts             # Edge proxy (replaces middleware.ts)
next.config.ts       # Next config (currently empty object)
postcss.config.mjs   # PostCSS — only plugin is @tailwindcss/postcss
eslint.config.mjs    # Flat config, extends eslint-config-next core-web-vitals + typescript
tsconfig.json        # strict, moduleResolution=bundler, paths: { "@/*": ["./*"] }
components.json      # shadcn config
Dockerfile           # Container build
AGENTS.md            # Short Next.js 16 reminder for other agents
```

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

Existing slugs: `katanapim`, `powerkick`, `tuktu`.

### Markdown content negotiation

`proxy.ts` rewrites two cases onto the same `/md` route handler:

- `GET /work/<slug>.md` → `/work/<slug>/md` (URL form).
- `GET /work/<slug>` with `Accept: text/markdown` and no `text/html` → `/work/<slug>/md` (content negotiation for `llms.txt` clients).

Both eventually hit `app/work/<slug>/md/route.ts`, which returns the `markdown` export from the matching content module. Matcher: `/work/:path*`.

### Analytics

Both injected from `app/layout.tsx`, inside `<body>`:

- **Google Analytics 4** — `<GoogleAnalytics gaId="G-YV9HEJLRM6" />` from `@next/third-parties/google`. Do NOT pass `dataLayerName` — overriding the default `dataLayer` breaks the GA dashboard.
- **Microsoft Clarity** — inline `next/script` with `strategy="afterInteractive"`, project ID `wwqiblnxfy`.

## Styling

### Stack

- **Tailwind v4** via `@tailwindcss/postcss` (only PostCSS plugin). There is no `tailwind.config.*` file — theme tokens live inside `@theme inline { ... }` in `app/globals.css`, mapped to CSS variables on `:root`.
- Imports at the top of `globals.css`: `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`.
- **Dark mode** uses `@custom-variant dark (&:is(.dark *))`. No theme toggle is wired up yet — single light palette in `:root`.
- **shadcn** style `radix-lyra`, base color `neutral`, icons via `phosphor` (`@phosphor-icons/react`). Generated primitives go to `components/ui/`. Page-level components live directly in `components/`.

### Design tokens (`:root` in `app/globals.css`)

Colors are OKLCH. Don't introduce hex/rgb — keep the palette consistent.

| Token | Value | Use |
|---|---|---|
| `--background` | `oklch(0.92 0.022 92)` | Page background (cream) |
| `--foreground` | `oklch(0.2 0.022 60)` | Body text |
| `--surface` | `oklch(0.965 0.018 92)` | Raised surface (lighter cream) |
| `--ink` | `oklch(0.18 0.025 55)` | Near-black for headings, strong text |
| `--olive` / `--olive-foreground` | `oklch(0.34 0.05 110)` / `oklch(0.95 0.025 95)` | Dark khaki accent |
| `--vivid` | `oklch(0.82 0.16 92)` | Yellow accent (links, underlines, selection) |
| `--vivid-on-dark` | `oklch(0.86 0.17 92)` | Yellow on dark backgrounds |
| `--tint-mint` | `oklch(0.9 0.06 165)` | Soft mint tint |
| `--tint-peach` | `oklch(0.88 0.07 30)` | Soft peach tint |
| `--tint-lavender` | `oklch(0.88 0.06 300)` | Soft lavender tint |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/danger |
| `--radius` | `0` | All radii (forced to 0 — see below) |

shadcn surface tokens (`--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border`, `--input`, `--ring`, `--sidebar-*`, `--chart-1..5`) are also defined but mostly neutral greys.

### Fonts

- `--font-sans` = `--font-inter` (Inter via `next/font/google`, weights 400/500/600/700/800/900, variable `--font-inter`).
- `--font-mono` = JetBrains Mono via `next/font/google`.
- `--font-heading` = currently aliased to Inter (CLAUDE.md historically referenced Archivo Black — that font is NOT actually loaded; `--font-heading` resolves to Inter).
- `font-feature-settings: "ss01", "cv11"` enabled globally on `body`.

### Base layer rules (`@layer base` in `globals.css`)

- **All `border-radius` is forced to 0** by `* { border-radius: 0 !important; }`. The portfolio is intentionally hard-edged; do not add rounded corners without removing that rule. shadcn `--radius-*` tokens compute from `--radius=0`, so they're all 0.
- `body::before` overlays a fractal-noise SVG at `opacity: 0.32` with `mix-blend-mode: multiply` — produces the paper-grain texture.
- `body::after` overlays radial gradients at top/bottom for vignette.
- `::selection` highlights with `--vivid` on `--ink`.

### Reusable classes (in `globals.css`)

- `.paint-shadow` — layered drop shadow (1px highlight + two soft offsets) for elevated cards.
- `.slide-up` — `slide-up` keyframe animation (0.6s ease-out, fades in + translates up 12px).
- `.prose-cs` — long-form prose styles used by case-study `Narrative` JSX. Styles `h2/h3/p/strong/a/ul/li/code/blockquote`. Links get a yellow `--vivid` underline. List bullets are a horizontal bar in `--vivid` instead of a dot.

## TypeScript & path alias

- `strict: true`, `moduleResolution: "bundler"`, `target: "ES2017"`, `jsx: "react-jsx"`.
- `@/*` resolves to the repo root (see `tsconfig.json`). Use it for all internal imports (`@/components/...`, `@/lib/...`, `@/content/...`).

## ESLint

Flat config in `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`. Ignores `.next/`, `out/`, `build/`, `next-env.d.ts`.

## Conventions

- No comments in CSS/code unless explaining non-obvious behavior.
- Keep border-radius at 0 site-wide.
- Use OKLCH for any new color; reuse existing tokens before adding new ones.
- Internal imports use `@/...` alias.
- Page-level components in `components/`; shadcn primitives in `components/ui/`.
- Case studies are TypeScript modules — never Markdown source files in `content/`.

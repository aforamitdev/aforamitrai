import type { CaseStudyMeta } from "@/lib/case-studies";

export const meta: CaseStudyMeta = {
  slug: "katanapim",
  title: "KatanaPIM — Scaling a PIM Platform for 60+ Clients",
  company: "KatanaPIM",
  role: "Sr. Software Developer",
  period: "Feb 2023 — Present",
  location: "Remote · India",
  summary:
    "Led the React migration of a legacy .NET MVC frontend, replaced Webpack with Rspack for a 65% build-time cut, bumped TypeScript 5 → 7, and containerized .NET Core services for Linux deployment on a PIM platform serving 60+ enterprise clients.",
  tags: [
    "React",
    "TypeScript",
    "Rspack",
    "Jotai",
    "React-Query",
    ".NET Core",
    "Docker",
    "MSSQL",
    "GitLab CI",
  ],
  impact: [
    { label: "Build time reduction", value: "65%" },
    { label: "Enterprise clients", value: "60+" },
    { label: "Product records managed", value: "Millions" },
  ],
  showcase: [
    {
      src: "/case-studies/katanapim/mappings.svg",
      alt: "KatanaPIM feed-to-field mapping UI with 314 feed fields mapped to 26 KatanaPIM fields, including filters for multi-language, search, and specification groups.",
      caption:
        "Feed-to-PIM field mapping — 314 source fields mapped across 26 targets, with multi-language + overwrite rules per row.",
    },
    {
      src: "/case-studies/katanapim/specifications.svg",
      alt: "KatanaPIM product edit screen showing Single Specifications group with Coil voltages, TDMB4-U200N Options and Keying code, plus a second specification group with a Gold plated contacts characteristic field.",
      caption:
        "Product edit UI — grouped single specifications, per-language overrides, and a right-rail quickview of content, specs, categories, SEO and attachments.",
    },
  ],
  ogImage: "/og/katanapim.png",
};

export const toc = [
  { id: "context", heading: "Context" },
  { id: "problem", heading: "Problem" },
  { id: "approach", heading: "Approach" },
  { id: "impact", heading: "Impact" },
  { id: "takeaways", heading: "Takeaways" },
];

export function Narrative() {
  return (
    <>
      <section id="context" className="scroll-mt-24">
        <h2>Context</h2>
        <p>
          KatanaPIM is a product information management platform that
          normalizes, enriches and distributes millions of product records
          across multiple e-commerce channels. By early 2023 the frontend was a
          maturing .NET MVC codebase with ad-hoc JavaScript — hard to evolve,
          slow to build, and expensive to onboard new engineers onto.
        </p>
        <p>
          I joined as a senior developer to modernize the stack without
          disrupting the 60+ enterprise clients already in production.
        </p>
      </section>

      <section id="problem" className="scroll-mt-24">
        <h2>Problem</h2>
        <ul>
          <li>
            <strong>Frontend velocity was capped</strong>: every feature
            required touching Razor views, jQuery, and bespoke plumbing.
          </li>
          <li>
            <strong>Build times kept growing</strong>: Webpack builds pushed
            past the 3-minute mark, killing feedback loops.
          </li>
          <li>
            <strong>Deployment was brittle</strong>: .NET Core services were
            deployed bare-metal with manual runbooks.
          </li>
          <li>
            <strong>Scale anxiety</strong>: product data volumes were climbing
            faster than our tooling could keep up.
          </li>
        </ul>
      </section>

      <section id="approach" className="scroll-mt-24">
        <h2>Approach</h2>

        <h3>1. React migration, page by page</h3>
        <p>
          Rather than a big-bang rewrite, we ported screens incrementally to
          ReactJS behind the existing Razor shell. We co-located state with
          components using <strong>Jotai</strong> for fine-grained, testable
          atoms, and standardized server state on <strong>React-Query</strong>{" "}
          for caching, retries, and optimistic updates.
        </p>

        <h3>2. Webpack → Rspack</h3>
        <p>
          The biggest quality-of-life win. Drop-in swap for our config, plus
          small tweaks to the module resolution to get parity. First cold builds
          dropped <strong>from ~180s to ~60s — a 65% cut</strong>. HMR became
          instant, and CI builds freed up capacity across the team.
        </p>

        <h3>3. TypeScript 5 → 7 upgrade</h3>
        <p>
          Bumped the codebase from{" "}
          <strong>TypeScript 5 to TypeScript 7</strong>. Worked through the
          breaking changes — stricter type inference, updated{" "}
          <code>lib.d.ts</code> targets, and deprecated flags — module by
          module. Faster type-check on CI and cleaner error diagnostics in the
          editor paid back the migration cost quickly.
        </p>

        <h3>4. Containerizing .NET Core for Linux</h3>
        <p>
          I containerized the .NET Core services with Docker and aligned local
          + CI + production on Linux images. Deploys moved to GitLab CI
          pipelines, removing the &ldquo;works on my machine&rdquo; and cutting
          the cost of spinning up new environments.
        </p>

        <h3>5. PIM feature work</h3>
        <p>
          Built core PIM features: import/export workflows spanning multiple
          e-commerce platforms, bulk editing UIs over millions of rows, and
          rich relationship views for SKUs, variants and categories. Ran Scrum
          planning and epic meetings to keep backend + frontend + data teams
          aligned.
        </p>
      </section>

      <section id="impact" className="scroll-mt-24">
        <h2>Impact</h2>
        <ul>
          <li>
            <strong>65% faster builds</strong> — happier engineers, shorter CI
            cycles.
          </li>
          <li>
            <strong>React now powers</strong> the critical PIM flows used by
            60+ customers.
          </li>
          <li>
            <strong>Reliable, reproducible deploys</strong> via Dockerized .NET
            Core on GitLab CI.
          </li>
          <li>
            <strong>Upgraded to TypeScript 7</strong> — faster CI type-checks
            and sharper editor diagnostics across the React codebase.
          </li>
          <li>
            <strong>Foundations in place</strong> for the next wave of product
            work — integrations, AI enrichment, and marketplace connectors.
          </li>
        </ul>
      </section>

      <section id="takeaways" className="scroll-mt-24">
        <h2>Takeaways</h2>
        <ul>
          <li>
            Incremental migration beats a rewrite when the business depends on
            the existing app every day.
          </li>
          <li>
            Build tooling is leverage — cutting 2 minutes off every build pays
            for itself within a week.
          </li>
          <li>
            Owning both frontend and deployment pipelines unlocked changes that
            would have stalled in silos.
          </li>
        </ul>
      </section>
    </>
  );
}

export const markdown = `---
slug: ${meta.slug}
title: ${JSON.stringify(meta.title)}
company: ${JSON.stringify(meta.company)}
role: ${JSON.stringify(meta.role)}
period: ${JSON.stringify(meta.period)}
location: ${JSON.stringify(meta.location)}
summary: ${JSON.stringify(meta.summary)}
tags: [${meta.tags.map((t) => JSON.stringify(t)).join(", ")}]
---

# ${meta.title}

## Context

KatanaPIM is a product information management platform that normalizes, enriches and distributes millions of product records across multiple e-commerce channels. By early 2023 the frontend was a maturing .NET MVC codebase with ad-hoc JavaScript — hard to evolve, slow to build, and expensive to onboard new engineers onto.

I joined as a senior developer to modernize the stack without disrupting the 60+ enterprise clients already in production.

## Problem

- **Frontend velocity was capped**: every feature required touching Razor views, jQuery, and bespoke plumbing.
- **Build times kept growing**: Webpack builds pushed past the 3-minute mark, killing feedback loops.
- **Deployment was brittle**: .NET Core services were deployed bare-metal with manual runbooks.
- **Scale anxiety**: product data volumes were climbing faster than our tooling could keep up.

## Approach

### 1. React migration, page by page

Rather than a big-bang rewrite, we ported screens incrementally to ReactJS behind the existing Razor shell. We co-located state with components using **Jotai** for fine-grained, testable atoms, and standardized server state on **React-Query** for caching, retries, and optimistic updates.

### 2. Webpack → Rspack

The biggest quality-of-life win. Drop-in swap for our config, plus small tweaks to the module resolution to get parity. First cold builds dropped **from ~180s to ~60s — a 65% cut**. HMR became instant, and CI builds freed up capacity across the team.

### 3. TypeScript 5 → 7 upgrade

Bumped the codebase from **TypeScript 5 to TypeScript 7**. Worked through the breaking changes — stricter type inference, updated \`lib.d.ts\` targets, and deprecated flags — module by module. Faster type-check on CI and cleaner error diagnostics in the editor paid back the migration cost quickly.

### 4. Containerizing .NET Core for Linux

I containerized the .NET Core services with Docker and aligned local + CI + production on Linux images. Deploys moved to GitLab CI pipelines, removing the "works on my machine" and cutting the cost of spinning up new environments.

### 5. PIM feature work

Built core PIM features: import/export workflows spanning multiple e-commerce platforms, bulk editing UIs over millions of rows, and rich relationship views for SKUs, variants and categories. Ran Scrum planning and epic meetings to keep backend + frontend + data teams aligned.

## Impact

- **65% faster builds** — happier engineers, shorter CI cycles.
- **React now powers** the critical PIM flows used by 60+ customers.
- **Reliable, reproducible deploys** via Dockerized .NET Core on GitLab CI.
- **Upgraded to TypeScript 7** — faster CI type-checks and sharper editor diagnostics across the React codebase.
- **Foundations in place** for the next wave of product work — integrations, AI enrichment, and marketplace connectors.

## Takeaways

- Incremental migration beats a rewrite when the business depends on the existing app every day.
- Build tooling is leverage — cutting 2 minutes off every build pays for itself within a week.
- Owning both frontend and deployment pipelines unlocked changes that would have stalled in silos.
`;

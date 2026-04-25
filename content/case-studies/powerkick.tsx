import type { CaseStudyMeta } from "@/lib/case-studies";

export const meta: CaseStudyMeta = {
  slug: "powerkick",
  title: "Powerkick — An Installable QR-Code Web App for 800+ EV Stations",
  company: "Powerkick",
  role: "Frontend Developer",
  period: "Nov 2020 — Jan 2023",
  location: "Remote · South Korea",
  summary:
    "Migrated a React Native codebase to the Web, shipped OAuth2, and built a Node.js/GraphQL backend with Redis caching to power an installable QR-code app used across 800+ EV charging stations in South Korea.",
  tags: [
    "Vue 3",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Redis",
    "MongoDB",
    "AWS CloudFront",
    "GitLab CI",
  ],
  impact: [
    { label: "EV stations served", value: "800+" },
    { label: "Coverage", value: "South Korea" },
    { label: "Redis cache hit-rate", value: "High — subsecond queries" },
  ],
  showcase: [],
  ogImage: "/og/powerkick.png",
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
          Powerkick operates a network of EV charging stations across South
          Korea. Drivers needed a frictionless way to authenticate, start a
          charge, and see session state — ideally without having to install a
          native app. The team had an existing React Native codebase and wanted
          to extend reach to the web as an installable PWA.
        </p>
      </section>

      <section id="problem" className="scroll-mt-24">
        <h2>Problem</h2>
        <ul>
          <li>
            <strong>Mobile-first, web-second</strong> — the original app was
            React Native and did not deliver a first-class web experience.
          </li>
          <li>
            <strong>Auth friction</strong> — each station interaction needed a
            secure, low-latency login.
          </li>
          <li>
            <strong>Query hot paths were slow</strong> — repeat GraphQL queries
            hit the DB every time.
          </li>
          <li>
            <strong>Deployments were manual</strong> — new builds required
            hands-on work.
          </li>
        </ul>
      </section>

      <section id="approach" className="scroll-mt-24">
        <h2>Approach</h2>

        <h3>1. React Native → React Web</h3>
        <p>
          I migrated the React Native screens to the web, keeping the shared
          domain logic where feasible and rewriting platform-specific layers.
          The web app was built as an installable PWA so drivers could add it
          to the home screen and launch it like a native app.
        </p>

        <h3>2. OAuth2 authentication</h3>
        <p>
          Shipped OAuth2 with secure token handling and refresh flows.
          Integrated it into the charging-session initiation path so users
          could tap-to-scan, authenticate, and start charging in a few seconds.
        </p>

        <h3>3. Node.js GraphQL backend + Redis cache</h3>
        <p>
          Built a Node.js GraphQL layer in front of the core services. Cached
          hot GraphQL queries in <strong>Redis</strong> — station lookups,
          pricing, and station availability — which dropped p95 latency and
          took load off downstream systems.
        </p>

        <h3>4. MongoDB + AWS + CI/CD</h3>
        <p>
          Integrated <strong>MongoDB</strong> for scalable document storage,
          deployed static assets behind <strong>AWS CloudFront</strong>, and
          wired up <strong>GitLab CI/CD</strong> for automated builds, test
          runs, and deployments. Also shipped the build to the Google Play
          Store for devices that preferred a packaged install.
        </p>
      </section>

      <section id="impact" className="scroll-mt-24">
        <h2>Impact</h2>
        <ul>
          <li>
            <strong>800+ charging stations</strong> served by a single
            responsive web app.
          </li>
          <li>
            <strong>Sub-second UX</strong> on hot paths thanks to aggressive
            Redis caching.
          </li>
          <li>
            <strong>Tap-to-charge</strong> in a few seconds via OAuth2 + QR
            initiation.
          </li>
          <li>
            <strong>Shipped to the Play Store</strong> and the public web from
            one pipeline.
          </li>
        </ul>
      </section>

      <section id="takeaways" className="scroll-mt-24">
        <h2>Takeaways</h2>
        <ul>
          <li>
            A well-scoped PWA removes the app-store tax without sacrificing UX
            for most mobile flows.
          </li>
          <li>
            Caching is the cheapest performance improvement you can buy — pick
            the right keys and the rest falls into place.
          </li>
          <li>
            Owning the whole pipeline (frontend + backend + cache + CI) made
            each optimization visible end-to-end.
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

Powerkick operates a network of EV charging stations across South Korea. Drivers needed a frictionless way to authenticate, start a charge, and see session state — ideally without having to install a native app. The team had an existing React Native codebase and wanted to extend reach to the web as an installable PWA.

## Problem

- **Mobile-first, web-second** — the original app was React Native and did not deliver a first-class web experience.
- **Auth friction** — each station interaction needed a secure, low-latency login.
- **Query hot paths were slow** — repeat GraphQL queries hit the DB every time.
- **Deployments were manual** — new builds required hands-on work.

## Approach

### 1. React Native → React Web

I migrated the React Native screens to the web, keeping the shared domain logic where feasible and rewriting platform-specific layers. The web app was built as an installable PWA so drivers could add it to the home screen and launch it like a native app.

### 2. OAuth2 authentication

Shipped OAuth2 with secure token handling and refresh flows. Integrated it into the charging-session initiation path so users could tap-to-scan, authenticate, and start charging in a few seconds.

### 3. Node.js GraphQL backend + Redis cache

Built a Node.js GraphQL layer in front of the core services. Cached hot GraphQL queries in **Redis** — station lookups, pricing, and station availability — which dropped p95 latency and took load off downstream systems.

### 4. MongoDB + AWS + CI/CD

Integrated **MongoDB** for scalable document storage, deployed static assets behind **AWS CloudFront**, and wired up **GitLab CI/CD** for automated builds, test runs, and deployments. Also shipped the build to the Google Play Store for devices that preferred a packaged install.

## Impact

- **800+ charging stations** served by a single responsive web app.
- **Sub-second UX** on hot paths thanks to aggressive Redis caching.
- **Tap-to-charge** in a few seconds via OAuth2 + QR initiation.
- **Shipped to the Play Store** and the public web from one pipeline.

## Takeaways

- A well-scoped PWA removes the app-store tax without sacrificing UX for most mobile flows.
- Caching is the cheapest performance improvement you can buy — pick the right keys and the rest falls into place.
- Owning the whole pipeline (frontend + backend + cache + CI) made each optimization visible end-to-end.
`;

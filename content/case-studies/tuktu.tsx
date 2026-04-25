import type { CaseStudyMeta } from "@/lib/case-studies";

export const meta: CaseStudyMeta = {
  slug: "tuktu",
  title: "Tuktu.ca — A Marketplace for In-Home Services",
  company: "Tuktu.ca",
  role: "Full Stack Developer",
  period: "Nov 2019 — Oct 2020",
  location: "Remote · Canada",
  summary:
    "Helped build a marketplace connecting Canadian families to qualified in-home service providers. Shipped a React Web port of the React Native client, a Node.js GraphQL API with Redis caching, and MongoDB-backed data.",
  tags: [
    "React",
    "React Native",
    "Node.js",
    "GraphQL",
    "Redis",
    "MongoDB",
    "CI/CD",
    "OAuth2",
  ],
  impact: [
    { label: "Platforms supported", value: "Web + Android" },
    { label: "Provider onboarding", value: "Self-serve" },
    { label: "Query cache", value: "Redis-backed GraphQL" },
  ],
  showcase: [],
  ogImage: "/og/tuktu.png",
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
          Tuktu.ca is a Canadian marketplace that helps families book trusted
          service providers — think care, cleaning, and home services — vetted
          through a structured onboarding process. The product existed as a
          React Native app and needed a web presence to widen the funnel.
        </p>
      </section>

      <section id="problem" className="scroll-mt-24">
        <h2>Problem</h2>
        <ul>
          <li>
            <strong>Mobile-only reach</strong> — potential customers dropping
            off when asked to install an app.
          </li>
          <li>
            <strong>Duplicate domain logic</strong> between a one-off web
            prototype and the RN app.
          </li>
          <li>
            <strong>Slow GraphQL hot paths</strong> for provider search and
            category browsing.
          </li>
          <li>
            <strong>Manual deploys</strong> to Play Store and hosting.
          </li>
        </ul>
      </section>

      <section id="approach" className="scroll-mt-24">
        <h2>Approach</h2>

        <h3>1. React Native → React Web</h3>
        <p>
          Ported screens from React Native to React Web — reusing domain logic
          where it was platform-neutral. The web experience matched the app
          for core flows: search, browse, book, and manage appointments.
        </p>

        <h3>2. OAuth2 + GraphQL + Redis</h3>
        <p>
          Shipped <strong>OAuth2</strong> for secure login across web and
          mobile. Built a <strong>Node.js GraphQL</strong> backend that fronted
          MongoDB, and cached frequently-hit queries (provider listings,
          service categories, and availability windows) in{" "}
          <strong>Redis</strong> to keep browse flows snappy.
        </p>

        <h3>3. MongoDB for scale</h3>
        <p>
          Modeled the core entities — providers, services, bookings, reviews —
          in <strong>MongoDB</strong> with an eye on future growth. Kept the
          schema flexible for the rapid iteration the product demanded.
        </p>

        <h3>4. CI/CD + Play Store</h3>
        <p>
          Wired <strong>CI/CD pipelines</strong> for automated builds and
          deployments, shipped the React Native build to the{" "}
          <strong>Google Play Store</strong>, and removed the manual
          coordination that had been slowing releases.
        </p>
      </section>

      <section id="impact" className="scroll-mt-24">
        <h2>Impact</h2>
        <ul>
          <li>
            <strong>Web + Android</strong> from one shared team and one
            pipeline.
          </li>
          <li>
            <strong>Faster browsing</strong> thanks to Redis-cached GraphQL.
          </li>
          <li>
            <strong>Secure OAuth2</strong> auth across both clients.
          </li>
          <li>
            <strong>Smoother release cadence</strong> after moving deploys
            behind CI/CD.
          </li>
        </ul>
      </section>

      <section id="takeaways" className="scroll-mt-24">
        <h2>Takeaways</h2>
        <ul>
          <li>
            React Native → Web is worth the port when mobile-install friction
            is the top funnel killer.
          </li>
          <li>
            GraphQL gives you a natural caching boundary — lean into it.
          </li>
          <li>
            Owning auth, data, and deploys made iterating on the product the
            fastest part of the job.
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

Tuktu.ca is a Canadian marketplace that helps families book trusted service providers — think care, cleaning, and home services — vetted through a structured onboarding process. The product existed as a React Native app and needed a web presence to widen the funnel.

## Problem

- **Mobile-only reach** — potential customers dropping off when asked to install an app.
- **Duplicate domain logic** between a one-off web prototype and the RN app.
- **Slow GraphQL hot paths** for provider search and category browsing.
- **Manual deploys** to Play Store and hosting.

## Approach

### 1. React Native → React Web

Ported screens from React Native to React Web — reusing domain logic where it was platform-neutral. The web experience matched the app for core flows: search, browse, book, and manage appointments.

### 2. OAuth2 + GraphQL + Redis

Shipped **OAuth2** for secure login across web and mobile. Built a **Node.js GraphQL** backend that fronted MongoDB, and cached frequently-hit queries (provider listings, service categories, and availability windows) in **Redis** to keep browse flows snappy.

### 3. MongoDB for scale

Modeled the core entities — providers, services, bookings, reviews — in **MongoDB** with an eye on future growth. Kept the schema flexible for the rapid iteration the product demanded.

### 4. CI/CD + Play Store

Wired **CI/CD pipelines** for automated builds and deployments, shipped the React Native build to the **Google Play Store**, and removed the manual coordination that had been slowing releases.

## Impact

- **Web + Android** from one shared team and one pipeline.
- **Faster browsing** thanks to Redis-cached GraphQL.
- **Secure OAuth2** auth across both clients.
- **Smoother release cadence** after moving deploys behind CI/CD.

## Takeaways

- React Native → Web is worth the port when mobile-install friction is the top funnel killer.
- GraphQL gives you a natural caching boundary — lean into it.
- Owning auth, data, and deploys made iterating on the product the fastest part of the job.
`;

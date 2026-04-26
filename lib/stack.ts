export type ToolLevel = "daily" | "weekly" | "occasional";

export type ToolCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud & DevOps";

export type Tool = {
  name: string;
  category: ToolCategory;
  level: ToolLevel;
  note: string;
  usedAt?: string[]; // case-study slugs
};

export const TOOLS: Tool[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    level: "daily",
    note: "Default for everything new — strict mode, narrow types, generics where they pay off.",
    usedAt: ["katanapim", "powerkick", "tuktu"],
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "daily",
    note: "Long-lived dialect — comfortable across ES5 quirks to modern ESM.",
  },
  {
    name: "Go",
    category: "Languages",
    level: "weekly",
    note: "Backend services, CLIs, and small concurrent tools. Lean on the stdlib.",
    usedAt: ["tuktu"],
  },
  {
    name: "C#",
    category: "Languages",
    level: "weekly",
    note: ".NET Core services and migration work — async/await, LINQ, EF Core.",
    usedAt: ["katanapim"],
  },
  {
    name: "Java",
    category: "Languages",
    level: "occasional",
    note: "Used for academic and earlier work — Spring basics, Maven builds.",
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: "daily",
    note: "Hooks, suspense, server components. Jotai or Zustand for state, React Query for server state.",
    usedAt: ["katanapim", "tuktu"],
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "daily",
    note: "App Router, server actions, edge proxies. Shipping this site on Next.js 16 + Turbopack.",
  },
  {
    name: "Vue 3",
    category: "Frontend",
    level: "weekly",
    note: "Composition API, Pinia, Nuxt — used for Powerkick's customer-facing app.",
    usedAt: ["powerkick"],
  },
  {
    name: "React Native",
    category: "Frontend",
    level: "occasional",
    note: "Cross-platform mobile shells — Expo, Reanimated, native modules when needed.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "daily",
    note: "v4 with CSS-variable tokens. Pair with shadcn for primitives.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "daily",
    note: "Express, Fastify, BullMQ. Comfortable in event-loop debugging and worker threads.",
  },
  {
    name: "GraphQL",
    category: "Backend",
    level: "weekly",
    note: "Apollo and urql on the client; codegen for end-to-end type safety.",
    usedAt: ["powerkick"],
  },
  {
    name: ".NET Core",
    category: "Backend",
    level: "weekly",
    note: "Web APIs, background services, EF Core migrations. Containerized for Linux.",
    usedAt: ["katanapim"],
  },
  {
    name: "gRPC",
    category: "Backend",
    level: "occasional",
    note: "Service-to-service contracts with protobuf — used in Tuktu's microservices.",
    usedAt: ["tuktu"],
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    level: "daily",
    note: "Schema design, indexing, query plans. Comfortable with JSONB and CTEs.",
  },
  {
    name: "MS SQL",
    category: "Database",
    level: "weekly",
    note: "KatanaPIM's primary store — millions of product records, tuned indexes and views.",
    usedAt: ["katanapim"],
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "weekly",
    note: "Document modeling, aggregations, and Atlas — used where schema flexibility wins.",
  },
  {
    name: "Redis",
    category: "Database",
    level: "weekly",
    note: "Caching, rate limits, BullMQ queues, pub/sub for realtime.",
  },

  // Cloud & DevOps
  {
    name: "Docker",
    category: "Cloud & DevOps",
    level: "daily",
    note: "Multi-stage builds, slim images, compose for local stacks. Every service behind amitrai.fyi, overflowlabs.org, and raicomputer.com ships as a Docker image.",
    usedAt: ["katanapim", "powerkick", "tuktu"],
  },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    level: "daily",
    note: "Self-managed cluster running my full personal infra — amitrai.fyi, overflowlabs.org, raicomputer.com — with Helm charts, ingress, HPAs, and zero-downtime rollouts.",
    usedAt: ["tuktu"],
  },
  {
    name: "ArgoCD",
    category: "Cloud & DevOps",
    level: "daily",
    note: "GitOps controller for the same cluster. Every site (amitrai.fyi, overflowlabs.org, raicomputer.com) auto-syncs from a GitHub repo — push to main, ArgoCD reconciles.",
  },
  {
    name: "GitOps",
    category: "Cloud & DevOps",
    level: "daily",
    note: "Git is the single source of truth for infra and app manifests. Pull-request review on every cluster change, no kubectl-from-laptop deploys.",
  },
  {
    name: "GitLab CI",
    category: "Cloud & DevOps",
    level: "daily",
    note: "Pipelines for build, test, scan, deploy. Reusable templates and cache strategy.",
    usedAt: ["katanapim"],
  },
  {
    name: "Azure",
    category: "Cloud & DevOps",
    level: "weekly",
    note: "App Services, Container Registry, Key Vault — where KatanaPIM lives.",
    usedAt: ["katanapim"],
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    level: "occasional",
    note: "ECS, S3, CloudFront, Lambda — used for side projects and earlier work.",
  },
];

export const CATEGORIES: ToolCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}

export const LEVEL_LABEL: Record<ToolLevel, string> = {
  daily: "Daily driver",
  weekly: "Weekly use",
  occasional: "Occasional",
};

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

type Role = {
  slug: string;
  company: string;
  location: string;
  title: string;
  period: string;
  blurb: string;
  tags: string[];
};

const roles: Role[] = [
  {
    slug: "katanapim",
    company: "KatanaPIM",
    location: "Remote · India",
    title: "Sr. Software Developer",
    period: "Feb 2023 — Present",
    blurb:
      "Migrated the frontend from .NET MVC to ReactJS; replaced Webpack with Rspack, cutting build time by 65%. Built and maintained a PIM platform serving 60+ enterprise clients with millions of product records.",
    tags: ["React", "TypeScript", "Rspack", "Jotai", ".NET Core", "Docker"],
  },
  {
    slug: "powerkick",
    company: "Powerkick",
    location: "Remote · South Korea",
    title: "Frontend Developer",
    period: "Nov 2020 — Jan 2023",
    blurb:
      "Installable QR-code web app powering 800+ EV power stations. Migrated React Native to React Web, shipped OAuth2, and built a Node.js/GraphQL backend with Redis caching.",
    tags: ["Vue 3", "TypeScript", "Node.js", "GraphQL", "Redis", "AWS"],
  },
  {
    slug: "tuktu",
    company: "Tuktu.ca",
    location: "Remote · Canada",
    title: "Full Stack Developer",
    period: "Nov 2019 — Oct 2020",
    blurb:
      "Marketplace for in-home services. Built a GraphQL API, Redis-backed query cache, and shipped a React Web port of the React Native client to the Play Store.",
    tags: ["React", "React Native", "GraphQL", "MongoDB", "CI/CD"],
  },
];

export function Experience() {
  return (
    <section id="work" className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 bg-[var(--vivid)]" /> Experience
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
              Explore My Engineering
              <br />
              Journey
            </h2>
          </div>
          <a
            href="mailto:hello@amitrai.fyi"
            className="inline-flex w-max items-center gap-2 border border-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            Book A Call
            <ArrowUpRightIcon size={12} weight="bold" />
          </a>
        </div>

        <div className="divide-y divide-black/10">
          {roles.map((role) => (
            <Link
              href={`/work/${role.slug}`}
              key={role.company}
              className="group grid grid-cols-1 gap-6 py-8 transition-colors hover:bg-[var(--surface)] md:grid-cols-[0.9fr_1fr_1.6fr_auto] md:items-start"
            >
              <header>
                <div className="font-heading text-xl font-black tracking-tight">
                  {role.company}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{role.location}</div>
              </header>

              <div>
                <div className="text-sm font-medium text-foreground">{role.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{role.period}</div>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-foreground/80">{role.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-black/15 bg-[var(--surface)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center md:justify-end">
                <span className="flex size-9 items-center justify-center border border-black/15 bg-[var(--surface)] transition-transform group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon size={14} weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

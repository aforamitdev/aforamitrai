import { ArrowUpRightIcon, GithubLogoIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";

type OssRole = "Author" | "Maintainer" | "Contributor";

type OssProject = {
  name: string;
  role: OssRole;
  description: string;
  url: string;
  tags: string[];
  stars?: string;
};

const projects: OssProject[] = [
  {
    name: "rspack",
    role: "Contributor",
    description:
      "Filed issues and landed small fixes while migrating KatanaPIM's build from Webpack — config parity, dev-server behaviour, and HMR edge cases.",
    url: "https://github.com/web-infra-dev/rspack",
    tags: ["Rust", "Bundler", "Rspack"],
    stars: "11k+",
  },
  {
    name: "jotai",
    role: "Contributor",
    description:
      "Drive-by fixes and docs nudges while adopting Jotai as the state primitive for KatanaPIM's React screens.",
    url: "https://github.com/pmndrs/jotai",
    tags: ["React", "State", "TypeScript"],
    stars: "19k+",
  },
  {
    name: "pim-feed-cli",
    role: "Author",
    description:
      "Small TypeScript CLI for validating product-feed XLSX/CSV against a PIM field mapping before import. Born out of debugging 314-field feeds at KatanaPIM.",
    url: "https://github.com/aforamitdev/pim-feed-cli",
    tags: ["TypeScript", "CLI", "Node.js"],
  },
  {
    name: "amitrai.fyi",
    role: "Author",
    description:
      "This portfolio. Next.js 16 + Turbopack + Tailwind, case studies as React pages, markdown negotiated on Accept header, llms.txt for AI crawlers.",
    url: "https://github.com/aforamitdev/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export function OpenSource() {
  return (
    <section id="open-source" className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 bg-[var(--vivid)]" /> Open Source
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
              Tools And Projects
              <br />
              I Ship in Public
            </h2>
          </div>
          <a
            href="https://github.com/aforamitdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max items-center gap-2 border border-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            <GithubLogoIcon size={12} weight="bold" />
            All repos on GitHub
            <ArrowUpRightIcon size={12} weight="bold" />
          </a>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-2 md:divide-x md:divide-y-0">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col gap-4 py-8 md:py-10 ${
                i % 2 === 0 ? "md:pr-10" : "md:pl-10"
              } ${i >= 2 ? "md:border-t md:border-black/10 md:pt-10" : ""}`}
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl font-black tracking-tight">
                      {p.name}
                    </span>
                    <span className="border border-black/15 bg-[var(--surface)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/80">
                      {p.role}
                    </span>
                  </div>
                  {p.stars && (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <StarIcon size={12} weight="fill" /> {p.stars} stars
                    </div>
                  )}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} on GitHub`}
                  className="flex size-9 shrink-0 items-center justify-center border border-black/15 bg-[var(--surface)] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowUpRightIcon size={14} weight="bold" />
                </a>
              </header>

              <p className="text-sm leading-relaxed text-foreground/80">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-black/15 bg-[var(--surface)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

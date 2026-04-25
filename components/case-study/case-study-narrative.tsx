import type { ReactNode } from "react";
import { ArrowUpRightIcon, FileTextIcon } from "@phosphor-icons/react/dist/ssr";

export type CaseStudyTocItem = { id: string; heading: string };

export function CaseStudyNarrative({
  slug,
  toc,
  children,
}: {
  slug: string;
  toc: CaseStudyTocItem[];
  children: ReactNode;
}) {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_2.4fr] md:px-14 md:py-24">
        <aside className="md:sticky md:top-10 md:self-start">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Narrative
          </div>
          <h2 className="mt-3 font-heading text-2xl font-black leading-tight tracking-tight">
            Problem, approach, impact.
          </h2>
          <nav className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground">
            {toc.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <span className="size-1 bg-[var(--ink)]" /> {s.heading}
              </a>
            ))}
          </nav>
          <a
            href={`/work/${slug}/md`}
            className="mt-8 inline-flex items-center gap-2 border border-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            <FileTextIcon size={12} weight="bold" />
            View as Markdown
            <ArrowUpRightIcon size={12} weight="bold" />
          </a>
        </aside>

        <div className="prose-cs max-w-none text-[15px] leading-relaxed text-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}

import { marked } from "marked";
import { ArrowUpRightIcon, FileTextIcon } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudySection } from "@/lib/case-studies";

marked.setOptions({ gfm: true, breaks: false, async: false });

export function CaseStudyNarrative({
  slug,
  sections,
}: {
  slug: string;
  sections: CaseStudySection[];
}) {
  const rendered = sections.map((s) => ({
    id: s.id,
    heading: s.heading,
    html: marked.parse(s.body) as string,
  }));

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
            {rendered.map((s) => (
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
          {rendered.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-b border-black/5 pb-10 last:border-0 last:pb-0"
            >
              <h2 className="!mt-0">{s.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

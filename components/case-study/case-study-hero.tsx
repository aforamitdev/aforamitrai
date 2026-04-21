import type { CaseStudyMeta } from "@/lib/case-studies";

export function CaseStudyHero({ meta }: { meta: CaseStudyMeta }) {
  return (
    <section className="grid border-b border-black/10 md:grid-cols-[1.4fr_1fr]">
      <div className="border-black/10 p-8 md:border-r md:p-14">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Case Study · {meta.company}
        </div>
        <h1 className="mt-6 font-heading text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {meta.summary}
        </p>
        <div className="mt-10 flex flex-wrap gap-1.5">
          {meta.tags.map((t) => (
            <span
              key={t}
              className="border border-black/15 bg-[var(--surface)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <aside className="grid grid-cols-2 md:grid-cols-1">
        {[
          { label: "Role", value: meta.role },
          { label: "Period", value: meta.period },
          { label: "Location", value: meta.location },
        ].map((row, i, arr) => (
          <div
            key={row.label}
            className={`p-6 md:p-10 ${
              i < arr.length - 1 ? "border-b border-black/10" : ""
            } ${i % 2 === 0 ? "border-r border-black/10 md:border-r-0" : ""}`}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {row.label}
            </div>
            <div className="mt-2 text-sm font-medium text-foreground">
              {row.value}
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}

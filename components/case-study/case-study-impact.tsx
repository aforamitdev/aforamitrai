import type { CaseStudyImpact } from "@/lib/case-studies";

export function CaseStudyImpactRow({ impact }: { impact: CaseStudyImpact[] }) {
  if (impact.length === 0) return null;

  return (
    <section className="grid grid-cols-1 border-b border-black/10 md:grid-cols-3">
      {impact.map((m, i, arr) => (
        <div
          key={m.label}
          className={`p-8 md:p-12 ${
            i < arr.length - 1
              ? "border-b border-black/10 md:border-b-0 md:border-r"
              : ""
          }`}
        >
          <div className="font-heading text-5xl font-black tracking-tight text-foreground">
            {m.value}
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {m.label}
          </div>
        </div>
      ))}
    </section>
  );
}

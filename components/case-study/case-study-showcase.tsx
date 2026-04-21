import type { CaseStudyShowcase } from "@/lib/case-studies";

export function CaseStudyShowcaseGallery({
  items,
}: {
  items: CaseStudyShowcase[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="border-b border-black/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-col gap-3 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-1.5 bg-[var(--ink)]" /> Showcase
            </div>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight md:text-4xl">
              What it actually looks like.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Shots from the product — interfaces I built and shipped into
            production, not mockups.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <figure
              key={`${item.src}-${i}`}
              className="group flex flex-col border border-black/10 bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-black/10 bg-[var(--surface)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {item.caption && (
                <figcaption className="flex items-start gap-3 px-5 py-4 text-xs text-muted-foreground">
                  <span className="mt-0.5 inline-block size-1.5 shrink-0 bg-[var(--ink)]" />
                  <span className="leading-relaxed">{item.caption}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

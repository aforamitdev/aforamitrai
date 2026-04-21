import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export function CtaBanner() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14">
        <div className="relative overflow-hidden bg-[var(--ink)] p-10 text-white md:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />
          <div className="relative z-10 grid grid-cols-1 items-end gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                Free Consultation
              </div>
              <h3 className="mt-4 max-w-2xl font-heading text-3xl font-black leading-[1.05] tracking-tight md:text-5xl">
                Got an idea worth shipping?
                <br />
                Let&apos;s build it right.
              </h3>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="max-w-sm text-sm text-white/60">
                I&apos;ll scope the idea, shape a plan, and figure out if we&apos;re a fit — no strings.
              </p>
              <a
                href="mailto:hello@amitrai.fyi"
                className="group inline-flex items-center gap-2 border border-white px-5 py-3 text-xs font-medium text-white hover:bg-white hover:text-[var(--ink)] transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRightIcon size={12} weight="bold" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

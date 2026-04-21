import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section id="about" className="border-b border-black/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_1.3fr]">
        <div className="border-black/10 p-8 md:border-r md:p-14">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 bg-[var(--ink)]" /> About Me
          </div>
          <h2 className="mt-5 max-w-md font-heading text-3xl font-black leading-[1.05] tracking-tight md:text-4xl">
            I turn business problems into clean, shippable software.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            My approach blends strong fundamentals with pragmatic engineering — I work
            fluently across the stack, write tests I trust, and care about performance and
            DX as much as features.
          </p>
          <ul className="mt-8 space-y-2 text-sm">
            {[
              "5+ years shipping production web apps",
              "Deep in React, Vue, TypeScript, and Go",
              "Strong collaborator — Scrum, KT, epic planning",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/80">
                <span className="mt-2 h-px w-4 shrink-0 bg-[var(--ink)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-b border-black/10 p-8 md:p-10">
            <div className="font-heading text-5xl font-black tracking-tight">65%</div>
            <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Reduction in build time after migrating Webpack → Rspack at KatanaPIM.
            </div>
          </div>
          <div className="border-b border-black/10 p-8 md:border-l md:p-10">
            <div className="font-heading text-5xl font-black tracking-tight">800+</div>
            <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
              EV stations across South Korea served by the Powerkick QR-code app.
            </div>
          </div>
          <div className="p-8 sm:col-span-2 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-heading text-lg font-black tracking-tight">
                  Available for new work
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Full-stack roles, contracts, and interesting side-projects.
                </div>
              </div>
              <a
                href="mailto:hello@amitrai.fyi"
                className="group flex size-10 shrink-0 items-center justify-center border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
              >
                <ArrowUpRightIcon size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

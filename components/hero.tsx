import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function Hero() {
  return (
    <section className="border-b border-black/10">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center bg-[var(--vivid)] text-[10px] font-bold text-[var(--ink)]">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight">amit.rai</span>
          </div>
          <nav className="hidden gap-8 text-xs md:flex">
            <a href="#about" className="hover:text-[var(--ink)] text-foreground/70">About</a>
            <a href="#work" className="hover:text-[var(--ink)] text-foreground/70">Work</a>
            <a href="#open-source" className="hover:text-[var(--ink)] text-foreground/70">Open Source</a>
            <a href="#stack" className="hover:text-[var(--ink)] text-foreground/70">Stack</a>
            <a href="#contact" className="hover:text-[var(--ink)] text-foreground/70">Contact</a>
          </nav>
          <a
            href="mailto:hello@amitrai.fyi"
            className="border border-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            Book A Call
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1.4fr_1fr]">
        <div className="slide-up flex flex-col justify-between border-black/10 p-8 md:border-r md:p-14">
          <div className="flex items-start gap-12 text-sm">
            <div>
              <div className="font-heading text-3xl tracking-tight text-[var(--ink)]">+5</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Years
                <br />
                Experience
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" aria-hidden />
            <div>
              <div className="font-heading text-3xl tracking-tight text-[var(--ink)]">+3</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Companies
                <br />
                Shipped at
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" aria-hidden />
            <div>
              <div className="font-heading text-3xl tracking-tight text-[var(--ink)]">60+</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Enterprise
                <br />
                Clients
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-24">
            <h1 className="font-heading text-7xl font-black leading-[0.85] tracking-tight text-foreground md:text-[11rem]">
              Hello<span className="text-foreground/30">.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              — I&apos;m Amit Rai, a Full Stack Developer crafting scalable,
              user-centric web applications.
            </p>
          </div>

          <a
            href="#work"
            className="mt-14 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <span className="flex size-7 items-center justify-center bg-[var(--vivid)] text-[var(--ink)]">
              <ArrowDownIcon size={12} weight="bold" />
            </span>
            Scroll down
          </a>
        </div>

        <div
          className="slide-up paint-shadow relative flex items-end justify-center overflow-hidden bg-[var(--surface)]"
          style={{ animationDelay: "120ms", minHeight: 420 }}
        >
          <Portrait />
          <div className="absolute left-4 top-4 border border-[var(--ink)]/20 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur">
            Full Stack Developer
          </div>
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <Image  src={"/portimage.jpg"} alt={""}  fill
        style={{ objectFit: 'cover' }}  />
  );
}

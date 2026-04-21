import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="border-b border-black/10">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center bg-[var(--ink)] text-[10px] font-bold text-white">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight">amit.rai</span>
          </div>
          <nav className="hidden gap-8 text-xs md:flex">
            <a href="#about" className="hover:text-[var(--ink)] text-foreground/70">About</a>
            <a href="#work" className="hover:text-[var(--ink)] text-foreground/70">Work</a>
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
              <div className="font-heading text-3xl font-black tracking-tight">+5</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Years
                <br />
                Experience
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" aria-hidden />
            <div>
              <div className="font-heading text-3xl font-black tracking-tight">+3</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Companies
                <br />
                Shipped at
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" aria-hidden />
            <div>
              <div className="font-heading text-3xl font-black tracking-tight">60+</div>
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
            <span className="flex size-7 items-center justify-center bg-[var(--ink)] text-white">
              <ArrowDownIcon size={12} weight="bold" />
            </span>
            Scroll down
          </a>
        </div>

        <div
          className="slide-up relative flex items-end justify-center overflow-hidden bg-[var(--surface)]"
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
    <svg viewBox="0 0 320 420" className="size-full max-h-[560px]" aria-hidden>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0 0)" />
          <stop offset="100%" stopColor="oklch(0.78 0 0)" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0 0)" />
          <stop offset="100%" stopColor="oklch(0.62 0 0)" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.28 0 0)" />
          <stop offset="100%" stopColor="oklch(0.16 0 0)" />
        </linearGradient>
      </defs>
      <rect width="320" height="420" fill="url(#bg)" />
      <path d="M0 420 C 30 340, 110 300, 160 300 C 210 300, 290 340, 320 420 Z" fill="url(#shirt)" />
      <rect x="140" y="265" width="40" height="45" fill="url(#skin)" />
      <ellipse cx="160" cy="190" rx="72" ry="82" fill="url(#skin)" />
      <path d="M92 160 C 88 100, 130 78, 160 78 C 198 78, 232 108, 230 168 C 225 135, 200 122, 170 124 C 140 122, 112 132, 98 168 Z" fill="oklch(0.16 0 0)" />
      <circle cx="132" cy="190" r="18" fill="none" stroke="oklch(0.14 0 0)" strokeWidth="2.5" />
      <circle cx="188" cy="190" r="18" fill="none" stroke="oklch(0.14 0 0)" strokeWidth="2.5" />
      <line x1="150" y1="190" x2="170" y2="190" stroke="oklch(0.14 0 0)" strokeWidth="2.5" />
      <path d="M140 232 Q 160 246, 180 232" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M115 222 C 125 258, 150 272, 160 272 C 170 272, 195 258, 205 222 C 200 238, 180 243, 160 243 C 140 243, 120 238, 115 222 Z" fill="oklch(0.16 0 0)" opacity="0.85" />
    </svg>
  );
}

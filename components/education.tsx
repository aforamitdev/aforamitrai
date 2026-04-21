export function Education() {
  return (
    <section id="education" className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-1.5 bg-[var(--ink)]" /> Education
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 md:grid-cols-[0.9fr_1fr_1.6fr_auto]">
          <div>
            <div className="font-heading text-xl font-black tracking-tight">
              Xavier Institute of Engineering
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Mumbai, India</div>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">
              Bachelor of Information Technology
            </div>
            <div className="mt-1 text-xs text-muted-foreground">May 2020</div>
          </div>
          <div className="text-sm text-foreground/80">
            University of Mumbai. Graduated with a CGPA of 7.8, focused on software
            engineering fundamentals and applied web development.
          </div>
          <div className="flex items-center md:justify-end">
            <span className="border border-black/15 bg-[var(--surface)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
              CGPA 7.8
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

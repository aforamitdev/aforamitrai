const groups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "C#", "Java"] },
  { label: "Frontend", items: ["ReactJS", "VueJS", "React Native"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "MS SQL"] },
  { label: "Cloud & Tools", items: ["Docker", "Kubernetes", "gRPC", "Azure", "Git", "GitLab CI"] },
];

export function Skills() {
  return (
    <section id="stack" className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-1.5 bg-[var(--vivid)]" /> Stack
        </div>
        <h2 className="mt-4 max-w-xl font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
          Tools I reach for.
        </h2>

        <div className="mt-12 grid grid-cols-1 border-t border-black/10 md:grid-cols-4">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className={`border-black/10 p-6 md:p-8 ${i < groups.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
            >
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {g.label}
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/90">
                    <span className="h-px w-3 bg-[var(--vivid)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

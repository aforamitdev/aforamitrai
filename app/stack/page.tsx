import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/footer";
import {
  CATEGORIES,
  LEVEL_LABEL,
  getToolsByCategory,
  type Tool,
  type ToolLevel,
} from "@/lib/stack";
import { getCaseStudyMeta } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Stack — tools I work with",
  description:
    "A working inventory of the languages, frameworks, databases and infrastructure Amit Rai uses day-to-day, weekly, or occasionally.",
  alternates: { canonical: "/stack" },
};

const LEVEL_DOTS: Record<ToolLevel, number> = {
  daily: 3,
  weekly: 2,
  occasional: 1,
};

function LevelDots({ level }: { level: ToolLevel }) {
  const filled = LEVEL_DOTS[level];
  return (
    <span className="inline-flex items-center gap-1" aria-label={LEVEL_LABEL[level]}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`size-1.5 ${i < filled ? "bg-[var(--vivid)]" : "bg-black/15"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

function ToolRow({ tool }: { tool: Tool }) {
  return (
    <li className="border-b border-black/10 px-6 py-7 last:border-b-0 md:px-10 md:py-8">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="font-heading text-xl font-black tracking-tight md:text-2xl">
          {tool.name}
        </h3>
        <div className="inline-flex items-center gap-2">
          <LevelDots level={tool.level} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {LEVEL_LABEL[tool.level]}
          </span>
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-foreground/80">
        {tool.note}
      </p>

      {tool.usedAt && tool.usedAt.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Used at
          </span>
          {tool.usedAt.map((slug) => {
            const meta = getCaseStudyMeta(slug);
            if (!meta) return null;
            return (
              <Link
                key={slug}
                href={`/work/${slug}`}
                className="inline-flex items-center gap-1 border border-[var(--ink)]/15 bg-white/60 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/70 hover:border-[var(--ink)] hover:text-[var(--ink)]"
              >
                {meta.company}
                <ArrowUpRightIcon size={10} weight="bold" />
              </Link>
            );
          })}
        </div>
      )}
    </li>
  );
}

export default function StackPage() {
  return (
    <main className="flex-1 border-x border-black/10">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="flex size-6 items-center justify-center bg-[var(--vivid)] text-[10px] font-bold text-[var(--ink)]">
              A
            </span>
            amit.rai
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            <ArrowLeftIcon size={12} weight="bold" />
            Back
          </Link>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 bg-[var(--vivid)]" /> Stack
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Tools I actually use, and how often.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
            A working inventory — what I reach for daily, what I keep sharp
            weekly, and what I pull off the shelf when a project asks for it.
            Everything here is from work I&apos;ve shipped or maintain right now.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            {(["daily", "weekly", "occasional"] as ToolLevel[]).map((lvl) => (
              <div key={lvl} className="inline-flex items-center gap-2">
                <LevelDots level={lvl} />
                <span>{LEVEL_LABEL[lvl]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {CATEGORIES.map((cat) => {
        const tools = getToolsByCategory(cat);
        if (tools.length === 0) return null;
        return (
          <section key={cat} className="border-b border-black/10">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
                <div className="border-b border-black/10 px-6 py-8 md:border-b-0 md:border-r md:px-14 md:py-12">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Category
                  </div>
                  <h2 className="mt-3 font-heading text-2xl font-black tracking-tight md:text-3xl">
                    {cat}
                  </h2>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {tools.length} {tools.length === 1 ? "tool" : "tools"}
                  </div>
                </div>
                <ul>
                  {tools.map((t) => (
                    <ToolRow key={t.name} tool={t} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}

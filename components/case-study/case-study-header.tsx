import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export function CaseStudyHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex size-6 items-center justify-center bg-[var(--ink)] text-[10px] font-bold text-white">
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
  );
}

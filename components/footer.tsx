import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-14 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">
              Contact
            </div>
            <a
              href="mailto:hello@amitrai.fyi"
              className="mt-4 block font-heading text-4xl font-black leading-[1.02] tracking-tight hover:text-[var(--vivid-on-dark)] md:text-7xl transition-colors"
            >
              hello
              <br />
              @amitrai.fyi
            </a>
            <div className="mt-6 text-sm text-white/60">+91 8369686636</div>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/60 md:items-end">
            <a href="https://amitrai.fyi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              amitrai.fyi
            </a>
            <a
              href="https://github.com/aforamitdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-row-reverse items-center gap-2 hover:text-white"
            >
              <GithubLogoIcon size={14} weight="bold" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aforamitrai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-row-reverse items-center gap-2 hover:text-white"
            >
              <LinkedinLogoIcon size={14} weight="bold" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-14">
          <div className="flex items-center gap-6">
            <span className="font-medium text-white">amit.rai</span>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#open-source" className="hover:text-white">Open Source</a>
            <a href="#stack" className="hover:text-white">Stack</a>
          </div>
          <span>© {new Date().getFullYear()} Amit Rai. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

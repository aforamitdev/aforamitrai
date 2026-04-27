import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
// import { OpenSource } from "@/components/open-source";
import { CtaBanner } from "@/components/cta-banner";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1 border-x border-black/10">
      <Hero />
      <About />
      <Experience />
      {/* <OpenSource /> */}
      <CtaBanner />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}

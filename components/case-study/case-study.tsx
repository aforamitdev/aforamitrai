import { Footer } from "@/components/footer";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyImpactRow } from "@/components/case-study/case-study-impact";
import { CaseStudyShowcaseGallery } from "@/components/case-study/case-study-showcase";
import { CaseStudyNarrative } from "@/components/case-study/case-study-narrative";
import { CaseStudyJsonLd } from "@/components/case-study/case-study-jsonld";
import { fromCaseStudyFile, type CaseStudyFile } from "@/lib/case-studies";

export function CaseStudy({ data }: { data: CaseStudyFile }) {
  const study = fromCaseStudyFile(data);
  const { meta, sections } = study;

  return (
    <main className="flex-1 border-x border-black/10">
      <CaseStudyJsonLd meta={meta} />
      <CaseStudyHeader />
      <article className="mx-auto max-w-7xl">
        <CaseStudyHero meta={meta} />
        <CaseStudyImpactRow impact={meta.impact} />
        <CaseStudyShowcaseGallery items={meta.showcase} />
        <CaseStudyNarrative slug={meta.slug} sections={sections} />
      </article>
      <Footer />
    </main>
  );
}

export function caseStudyMetadata(data: CaseStudyFile) {
  const study = fromCaseStudyFile(data);
  const { meta } = study;
  const url = `/work/${meta.slug}`;
  const ogImages = meta.ogImage
    ? [meta.ogImage]
    : meta.showcase.length > 0
      ? meta.showcase.map((s) => s.src)
      : undefined;
  return {
    title: `${meta.title} · Amit Rai`,
    description: meta.summary,
    alternates: {
      canonical: url,
      types: { "text/markdown": `${url}/md` },
    },
    openGraph: {
      type: "article" as const,
      title: meta.title,
      description: meta.summary,
      url,
      siteName: "Amit Rai",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: meta.title,
      description: meta.summary,
      images: ogImages,
    },
    keywords: meta.tags,
  };
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getCaseStudy } from "@/lib/case-studies";
import { Footer } from "@/components/footer";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyImpactRow } from "@/components/case-study/case-study-impact";
import { CaseStudyShowcaseGallery } from "@/components/case-study/case-study-showcase";
import { CaseStudyNarrative } from "@/components/case-study/case-study-narrative";
import { CaseStudyJsonLd } from "@/components/case-study/case-study-jsonld";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return {};
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
      type: "article",
      title: meta.title,
      description: meta.summary,
      url,
      siteName: "Amit Rai",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
      images: ogImages,
    },
    keywords: meta.tags,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

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

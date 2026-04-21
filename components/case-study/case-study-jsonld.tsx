import type { CaseStudyMeta } from "@/lib/case-studies";

const SITE = "https://amitrai.fyi";

export function CaseStudyJsonLd({ meta }: { meta: CaseStudyMeta }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.summary,
    author: {
      "@type": "Person",
      name: "Amit Rai",
      url: SITE,
    },
    publisher: {
      "@type": "Person",
      name: "Amit Rai",
    },
    keywords: meta.tags.join(", "),
    about: meta.company,
    url: `${SITE}/work/${meta.slug}`,
    mainEntityOfPage: `${SITE}/work/${meta.slug}`,
    image: meta.showcase.map((s) => `${SITE}${s.src}`),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

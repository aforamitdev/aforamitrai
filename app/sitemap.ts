import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/case-studies";

const SITE = "https://amitrai.fyi";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    ...slugs.flatMap((slug) => [
      {
        url: `${SITE}/work/${slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.8,
      },
      {
        url: `${SITE}/work/${slug}.md`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.5,
      },
    ]),
  ];
}

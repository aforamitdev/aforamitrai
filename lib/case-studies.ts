import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyImpact = { label: string; value: string };
export type CaseStudyShowcase = { src: string; alt: string; caption?: string };
export type CaseStudySection = { id: string; heading: string; body: string };

export type CaseStudyMeta = {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  impact: CaseStudyImpact[];
  showcase: CaseStudyShowcase[];
  ogImage?: string;
};

export type CaseStudy = {
  meta: CaseStudyMeta;
  sections: CaseStudySection[];
  /** Markdown projection of the case study body — heading + body per section. */
  markdown: string;
  /** Pretty-printed JSON source (what the `.md`/`.json` endpoints serve). */
  raw: string;
};

export type CaseStudyFile = CaseStudyMeta & { sections: CaseStudySection[] };

export function caseStudyToMarkdown(data: CaseStudyFile): string {
  return data.sections
    .map((s) => `## ${s.heading}\n\n${s.body.trim()}`)
    .join("\n\n");
}

export function caseStudyToMarkdownWithFrontmatter(data: CaseStudyFile): string {
  const meta = data;
  const body = caseStudyToMarkdown(data);
  return [
    "---",
    `slug: ${meta.slug}`,
    `title: ${JSON.stringify(meta.title)}`,
    `company: ${JSON.stringify(meta.company)}`,
    `role: ${JSON.stringify(meta.role)}`,
    `period: ${JSON.stringify(meta.period)}`,
    `location: ${JSON.stringify(meta.location)}`,
    `summary: ${JSON.stringify(meta.summary)}`,
    `tags: [${(meta.tags ?? []).map((t) => JSON.stringify(t)).join(", ")}]`,
    "---",
    "",
    `# ${meta.title}`,
    "",
    body,
    "",
  ].join("\n");
}

export function fromCaseStudyFile(data: CaseStudyFile): CaseStudy {
  const meta: CaseStudyMeta = {
    slug: data.slug,
    title: data.title,
    company: data.company,
    role: data.role,
    period: data.period,
    location: data.location,
    summary: data.summary,
    tags: data.tags ?? [],
    impact: data.impact ?? [],
    showcase: data.showcase ?? [],
    ogImage: data.ogImage,
  };
  return {
    meta,
    sections: data.sections ?? [],
    markdown: caseStudyToMarkdown(data),
    raw: JSON.stringify(data, null, 2),
  };
}

async function loadFile(slug: string): Promise<CaseStudy | null> {
  try {
    const file = path.join(CONTENT_DIR, `${slug}.json`);
    const raw = await readFile(file, "utf8");
    const data = JSON.parse(raw) as CaseStudyFile;
    return { ...fromCaseStudyFile({ ...data, slug: data.slug ?? slug }), raw };
  } catch {
    return null;
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return loadFile(slug);
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const entries = await readdir(CONTENT_DIR);
  const slugs = entries
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
  const results = await Promise.all(slugs.map(loadFile));
  return results.filter((r): r is CaseStudy => r !== null);
}

export async function getAllSlugs(): Promise<string[]> {
  const entries = await readdir(CONTENT_DIR);
  return entries
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

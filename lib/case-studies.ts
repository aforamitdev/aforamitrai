import * as katanapim from "@/content/case-studies/katanapim";
import * as powerkick from "@/content/case-studies/powerkick";
import * as tuktu from "@/content/case-studies/tuktu";

export type CaseStudyImpact = { label: string; value: string };
export type CaseStudyShowcase = { src: string; alt: string; caption?: string };

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

export const CASE_STUDIES = [katanapim, powerkick, tuktu] as const;

export function getAllCaseStudies(): CaseStudyMeta[] {
  return CASE_STUDIES.map((m) => m.meta);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((m) => m.meta.slug);
}

export function getCaseStudyMeta(slug: string): CaseStudyMeta | undefined {
  return CASE_STUDIES.find((m) => m.meta.slug === slug)?.meta;
}

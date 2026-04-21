import type { Metadata } from "next";
import data from "@/content/case-studies/katanapim.json";
import { CaseStudy, caseStudyMetadata } from "@/components/case-study/case-study";
import type { CaseStudyFile } from "@/lib/case-studies";

const study = data as CaseStudyFile;

export const metadata: Metadata = caseStudyMetadata(study);

export default function KatanaPIMCaseStudy() {
  return <CaseStudy data={study} />;
}

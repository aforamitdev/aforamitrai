import { NextResponse } from "next/server";
import data from "@/content/case-studies/katanapim.json";
import {
  caseStudyToMarkdownWithFrontmatter,
  type CaseStudyFile,
} from "@/lib/case-studies";

const body = caseStudyToMarkdownWithFrontmatter(data as CaseStudyFile);

export function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "index, follow",
    },
  });
}

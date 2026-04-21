import { NextResponse } from "next/server";
import { getCaseStudy, getAllSlugs } from "@/lib/case-studies";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) {
    return new NextResponse("Not found", { status: 404 });
  }
  const { meta, markdown } = study;
  const front = [
    "---",
    `slug: ${meta.slug}`,
    `title: ${JSON.stringify(meta.title)}`,
    `company: ${JSON.stringify(meta.company)}`,
    `role: ${JSON.stringify(meta.role)}`,
    `period: ${JSON.stringify(meta.period)}`,
    `location: ${JSON.stringify(meta.location)}`,
    `summary: ${JSON.stringify(meta.summary)}`,
    `tags: [${meta.tags.map((t) => JSON.stringify(t)).join(", ")}]`,
    "---",
    "",
    `# ${meta.title}`,
    "",
    markdown,
    "",
  ].join("\n");
  return new NextResponse(front, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "index, follow",
    },
  });
}

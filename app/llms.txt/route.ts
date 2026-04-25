import { NextResponse } from "next/server";
import { getAllCaseStudies } from "@/lib/case-studies";

const SITE = "https://amitrai.fyi";

export function GET() {
  const studies = getAllCaseStudies();

  const body = [
    "# Amit Rai",
    "",
    "> Full Stack Developer with 5+ years of experience building scalable, user-centric web applications in React, Vue, TypeScript, and Go.",
    "",
    "Contact: hello@amitrai.fyi",
    `Site: ${SITE}`,
    "",
    "## Case Studies",
    "",
    ...studies.map(
      (s) =>
        `- [${s.title}](${SITE}/work/${s.slug}): ${s.summary} — raw markdown at ${SITE}/work/${s.slug}.md`,
    ),
    "",
    "## Open Source",
    "",
    "- rspack (contributor): https://github.com/web-infra-dev/rspack — small fixes + issues from migrating KatanaPIM's build from Webpack.",
    "- jotai (contributor): https://github.com/pmndrs/jotai — drive-by fixes + docs nudges while adopting Jotai on KatanaPIM.",
    "- pim-feed-cli (author): https://github.com/aforamitdev/pim-feed-cli — TypeScript CLI that validates product-feed XLSX/CSV against a PIM field mapping.",
    "- amitrai.fyi portfolio (author): https://github.com/aforamitdev/portfolio — Next.js 16 + Turbopack + Tailwind, case studies as React pages, markdown negotiation, llms.txt.",
    "",
    "## Skills",
    "",
    "- Languages: TypeScript, JavaScript, Go, C#, Java",
    "- Frontend: React, Vue 3, React Native",
    "- Backend: Node.js, GraphQL, .NET Core",
    "- Database: PostgreSQL, MongoDB, MS SQL, Redis",
    "- Cloud & Tools: Docker, Kubernetes, gRPC, Azure, AWS, GitLab CI",
    "",
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "index, follow",
    },
  });
}

import { NextResponse } from "next/server";
import { getAllCaseStudies } from "@/lib/case-studies";

const SITE = "https://amitrai.fyi";

export async function GET() {
  const studies = await getAllCaseStudies();

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
        `- [${s.meta.title}](${SITE}/work/${s.meta.slug}): ${s.meta.summary} — raw markdown at ${SITE}/work/${s.meta.slug}.md`,
    ),
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

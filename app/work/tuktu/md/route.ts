import { NextResponse } from "next/server";
import { markdown } from "@/content/case-studies/tuktu";

export function GET() {
  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "index, follow",
    },
  });
}

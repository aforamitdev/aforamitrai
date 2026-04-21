import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const mdMatch = /^\/work\/([^/]+)\.md$/.exec(pathname);
  if (mdMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/work/${mdMatch[1]}/md`;
    return NextResponse.rewrite(url);
  }

  const accept = request.headers.get("accept") ?? "";
  const wantsMarkdown =
    accept.includes("text/markdown") &&
    !accept.includes("text/html") &&
    /^\/work\/[^/]+\/?$/.test(pathname);

  if (wantsMarkdown) {
    const slug = pathname.replace(/^\/work\//, "").replace(/\/$/, "");
    const url = request.nextUrl.clone();
    url.pathname = `/work/${slug}/md`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/work/:path*"],
};

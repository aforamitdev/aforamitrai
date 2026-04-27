import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800", "900"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const SITE = "https://amitrai.fyi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Amit Rai — Full Stack Developer (React, Vue, TypeScript, Go)",
    template: "%s · Amit Rai",
  },
  description:
    "Amit Rai is a Full Stack Developer with 5+ years of experience building scalable, user-centric web apps in React, Vue, TypeScript and Go. Based in India, working remotely worldwide.",
  applicationName: "Amit Rai",
  authors: [{ name: "Amit Rai", url: SITE }],
  creator: "Amit Rai",
  keywords: [
    "Amit Rai",
    "Full Stack Developer",
    "React Developer",
    "Vue Developer",
    "TypeScript",
    "Go",
    "Node.js",
    "GraphQL",
    "Portfolio",
    "Remote Developer",
  ],
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Amit Rai",
    title: "Amit Rai — Full Stack Developer",
    description:
      "5+ years shipping scalable web apps in React, Vue, TypeScript and Go. Case studies on KatanaPIM, Powerkick and Tuktu.",
    url: SITE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Rai — Full Stack Developer",
    description:
      "5+ years shipping scalable web apps in React, Vue, TypeScript and Go.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Rai",
    jobTitle: "Full Stack Developer",
    email: "mailto:hello@amitrai.fyi",
    telephone: "+91-8369686636",
    url: SITE,
    sameAs: [
      "https://amitrai.fyi",
      "https://github.com/aforamitdev",
      "https://www.linkedin.com/in/aforamitrai",
    ],
    knowsAbout: [
      "ReactJS",
      "VueJS",
      "TypeScript",
      "Go",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Xavier Institute of Engineering, University of Mumbai",
    },
  };

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <GoogleAnalytics gaId="G-YV9HEJLRM6" dataLayerName="main"/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — AI Tools, Prompts & Learning Materials",
  description:
    "Free AI tools, copy-paste prompt templates, and digital learning resources curated by AIT Digital Solutions. 100% free, no sign-up required. Grow faster with hand-picked tools.",
  alternates: { canonical: "https://aitdigitalsolutions.com/free-resources" },
  openGraph: {
    title: "Free Digital Resources — AIT Digital Solutions",
    description: "Free AI tools, prompt templates, and resources for digital creators and entrepreneurs. No sign-up required.",
    url: "https://aitdigitalsolutions.com/free-resources",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AIT Digital Solutions Free Resources" }],
  },
};

export default function FreeResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

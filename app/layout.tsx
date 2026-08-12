import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://aitdigitalsolutions.com"),
  title: {
    default: "AIT Digital Solutions | Digital Skills & Business Growth Hub — Gujranwala",
    template: "%s | AIT Digital Solutions",
  },
  description:
    "AIT Digital Solutions is Pakistan's premier digital skills training and services hub in Gujranwala. Courses in YouTube Automation, Freelancing, Digital Marketing, E-Commerce, AI Tools, Web & App Development. 25,000+ students trained.",
  keywords: [
    "AIT Digital Solutions",
    "digital skills training Pakistan",
    "digital marketing course Gujranwala",
    "YouTube automation course Pakistan",
    "freelancing training Gujranwala",
    "AI tools course Pakistan",
    "web development Gujranwala",
    "ecommerce automation Pakistan",
    "TikTok automation course",
    "online courses Pakistan",
    "Arslan Ahmad",
    "Iftikhar ul Hassan",
    "M Gulzar",
    "digital business solutions",
    "income skills online Pakistan",
  ],
  authors: [{ name: "AIT Digital Solutions", url: "https://aitdigitalsolutions.com" }],
  creator: "AIT Digital Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitdigitalsolutions.com",
    siteName: "AIT Digital Solutions",
    title: "AIT Digital Solutions | Digital Skills & Business Growth Hub",
    description:
      "Pakistan's premier digital skills training and business growth hub in Gujranwala. 25,000+ students trained. Learn YouTube Automation, Freelancing, Digital Marketing, AI Tools & more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AIT Digital Solutions — Digital Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIT Digital Solutions | Digital Skills & Business Growth Hub",
    description:
      "Pakistan's premier digital skills training hub. 25,000+ students trained in Gujranwala.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://aitdigitalsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "EducationalOrganization"],
                "@id": "https://aitdigitalsolutions.com/#organization",
                name: "AIT Digital Solutions",
                description:
                  "Pakistan's premier digital skills training and business growth hub offering courses and services in YouTube Automation, Freelancing, Digital Marketing, E-Commerce, AI Tools, and Web Development.",
                url: "https://aitdigitalsolutions.com",
                logo: "https://aitdigitalsolutions.com/images/logo.png",
                image: "https://aitdigitalsolutions.com/opengraph-image",
                telephone: "+923166768001",
                email: "info@aitdigitalsolutions.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gujranwala",
                  addressRegion: "Punjab",
                  addressCountry: "PK",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 32.1877,
                  longitude: 74.1945,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "09:00",
                    closes: "21:00",
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/people/AIT-Digital-Solutions/61592822961571/",
                ],
                founder: [
                  { "@type": "Person", name: "Arslan Ahmad", jobTitle: "Co-Founder & CEO", url: "https://aitdigitalsolutions.com/team" },
                  { "@type": "Person", name: "Iftikhar-UL-Hassan", jobTitle: "Co-Founder & Director", url: "https://aitdigitalsolutions.com/team" },
                  { "@type": "Person", name: "M. Gulzar", jobTitle: "Founder & Director", url: "https://aitdigitalsolutions.com/team" },
                ],
                numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  bestRating: "5",
                  ratingCount: "500",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://aitdigitalsolutions.com/#website",
                url: "https://aitdigitalsolutions.com",
                name: "AIT Digital Solutions",
                description: "Pakistan's premier digital skills training and business growth hub",
                publisher: { "@id": "https://aitdigitalsolutions.com/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: { "@type": "EntryPoint", urlTemplate: "https://aitdigitalsolutions.com/courses?q={search_term_string}" },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased overflow-x-hidden">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}</Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

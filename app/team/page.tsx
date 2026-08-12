import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Globe2, CheckCircle, Youtube, Brain, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team — Meet the Founders",
  description:
    "Meet AIT Digital Solutions' founders — Arslan Ahmad (CEO & Author), Iftikhar-UL-Hassan (Co-Founder, Top Rated Freelancer), and M. Gulzar (Director). Real entrepreneurs building Pakistan's digital future from Gujranwala.",
  alternates: { canonical: "https://aitdigitalsolutions.com/team" },
  openGraph: {
    title: "Meet the Founders — AIT Digital Solutions",
    description: "Arslan Ahmad, Iftikhar-UL-Hassan, and M. Gulzar — real entrepreneurs who teach from real experience, not theory.",
    url: "https://aitdigitalsolutions.com/team",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AIT Digital Solutions Leadership Team" }],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AIT Digital Solutions Founders",
  url: "https://aitdigitalsolutions.com/team",
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type": "Person",
        name: "Arslan Ahmad",
        jobTitle: "Co-Founder & CEO",
        description: "Pakistani entrepreneur, author of 2 books, content creation consultant, and business strategist with 80K+ social media followers and 25,000+ students trained.",
        worksFor: { "@type": "Organization", name: "AIT Digital Solutions", url: "https://aitdigitalsolutions.com" },
        image: "https://aitdigitalsolutions.com/images/team/arslan.jpg",
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type": "Person",
        name: "Iftikhar-UL-Hassan",
        jobTitle: "Co-Founder & Director",
        description: "YouTube Automation expert, AI & Digital Marketing strategist, Top Rated Freelancer with 8+ years industry experience and 2,000+ students trained.",
        worksFor: { "@type": "Organization", name: "AIT Digital Solutions", url: "https://aitdigitalsolutions.com" },
        image: "https://aitdigitalsolutions.com/images/team/iftikhar.jpg",
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type": "Person",
        name: "M. Gulzar",
        jobTitle: "Founder & Director",
        description: "Business operations and networking expert with 10+ years experience managing 8+ physical businesses and Director at Thcommerce Company.",
        worksFor: { "@type": "Organization", name: "AIT Digital Solutions", url: "https://aitdigitalsolutions.com" },
        image: "https://aitdigitalsolutions.com/images/team/gulzar.jpg",
      },
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <section className="pt-32 pb-16 section-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge mb-6 inline-flex">Our Leadership</span>
          <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
            Built by Entrepreneurs,<br />
            <span className="gold-text">For Entrepreneurs</span>
          </h1>
          <p className="text-ink-muted text-base sm:text-xl max-w-xl mx-auto">
            Our founders don&apos;t just teach — they do. Every course and service is
            built from real business experience, not theory.
          </p>
        </div>
      </section>

      {/* Arslan Ahmad */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24">
            {/* Photo Card */}
            <div className="bg-ink rounded-3xl overflow-hidden relative" style={{ minHeight: "min(480px, 70vw)" }}>
              <div className="absolute inset-0 grid-pattern-dark" />
              <Image
                src="/images/team/arslan.jpg"
                alt="Arslan Ahmad — Co-Founder & CEO, AIT Digital Solutions"
                fill
                className="object-cover object-top opacity-90"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h2 className="font-heading font-black text-white text-3xl mb-1">Arslan Ahmad</h2>
                <p className="text-gold font-semibold mb-1">Co-Founder & CEO</p>
                <p className="text-gray-400 text-xs mb-5">AIT Digital Solutions | Star X | MIS Real Estate</p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: Users,    v: "25K+", l: "Students"  },
                    { icon: BookOpen, v: "2",    l: "Books"     },
                    { icon: Globe2,   v: "80K+", l: "Followers" },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.l} className="border border-gold/15 rounded-xl p-3 bg-black/40 backdrop-blur-sm">
                        <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                        <div className="font-heading font-black text-lg gold-text text-center">{s.v}</div>
                        <div className="text-gray-500 text-[10px] uppercase text-center">{s.l}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-badge mb-5 inline-flex">Co-Founder & CEO</span>
              <h2 className="font-heading font-black text-ink text-4xl mb-2">Arslan Ahmad</h2>
              <p className="text-gold font-semibold text-sm mb-5 tracking-wider uppercase">
                Co Founder & CEO | AIT Digital Solutions | Co-Founder of Star X | Writer | Speaker | Content Creation Consultant | Business Strategist | Entrepreneur
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                Arslan Ahmad is one of Pakistan&apos;s most dynamic young entrepreneurs — a writer, speaker,
                content creation consultant, and business strategist who has built a massive digital presence
                with 80,000+ followers across social media.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                Having trained 25,000+ students through seminars, workshops, and online programs, Arslan
                brings unmatched expertise in helping people build income-generating digital skills. With experience
                across 8 physical businesses, his knowledge spans content creation, AI, digital marketing, and entrepreneurship.
              </p>
              <p className="text-ink-muted leading-relaxed mb-6">
                As the author of 2 published books (with a 3rd in progress), a Punjab-Level Speech Competition Topper,
                and featured in leading national newspapers — Arslan was also interviewed by the Qasim Ali Shah Foundation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {[
                  "Co-Founder — Star X",
                  "Sr. Sales Executive — MIS Real Estate",
                  "Writer — 2 Published Books (3rd in progress)",
                  "Public Speaker",
                  "Content Creation Consultant",
                  "Punjab Speech Competition Topper",
                  "Qasim Ali Shah Foundation Interview",
                  "Featured in National Newspapers",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                    <span className="text-xs text-ink-muted">{r}</span>
                  </div>
                ))}
              </div>
              <p className="text-ink font-semibold italic text-sm border-l-2 border-gold pl-4">
                &ldquo;My mission is to empower people with practical knowledge in content creation,
                entrepreneurship, AI, and digital business — enabling them to build impactful brands
                and long-term success in the digital economy.&rdquo;
                <span className="block text-ink-soft font-normal mt-1">— Arslan Ahmad</span>
              </p>
            </div>
          </div>

          {/* Iftikhar-UL-Hassan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24">
            {/* Content */}
            <div>
              <span className="section-badge mb-5 inline-flex">Co-Founder & Director</span>
              <h2 className="font-heading font-black text-ink text-4xl mb-2">Iftikhar-UL-Hassan</h2>
              <p className="text-gold font-semibold text-sm mb-5 tracking-wider uppercase">
                Co-Founder & Director | AIT Digital Solutions | YouTube Automation Expert | AI & Digital Marketing Strategist | Content Creator | Top Rated Freelancer
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                With 8+ years of industry experience and 5+ years of dedicated teaching, Iftikhar-UL-Hassan
                is the driving force behind AIT&apos;s most practical, result-oriented training programs.
                As a Top Rated Freelancer, he has successfully trained 2,000+ students through online and in-person programs.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                His expertise spans YouTube Automation, AI Tools, Content Creation, Social Media Management,
                Personal Branding, Digital Marketing, E-Commerce, and Freelancing — making him one of the
                most versatile digital educators in Pakistan.
              </p>
              <p className="text-ink-muted leading-relaxed mb-6">
                Iftikhar&apos;s focus is on delivering practical, result-driven training that empowers individuals
                and businesses to grow using the latest AI tools and digital strategies. Every course he teaches
                is built from what he has actually done — not theory.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {[
                  "YouTube Automation Expert",
                  "AI & Digital Marketing Strategist",
                  "Content Creator & Social Media Manager",
                  "Personal Branding Specialist",
                  "E-Commerce Specialist",
                  "Top Rated Freelancer",
                  "8+ Years Industry Experience",
                  "2,000+ Students Trained",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                    <span className="text-xs text-ink-muted">{r}</span>
                  </div>
                ))}
              </div>
              <p className="text-ink font-semibold italic text-sm border-l-2 border-gold pl-4">
                &ldquo;I believe in empowering people with practical digital skills that create real, sustainable income —
                not just theory. Every strategy I teach, I have personally used to build results.&rdquo;
                <span className="block text-ink-soft font-normal mt-1">— Iftikhar-UL-Hassan</span>
              </p>
            </div>

            {/* Photo Card */}
            <div className="bg-ink rounded-3xl overflow-hidden relative" style={{ minHeight: "min(480px, 70vw)" }}>
              <div className="absolute inset-0 grid-pattern-dark" />
              <Image
                src="/images/team/iftikhar.jpg"
                alt="Iftikhar-UL-Hassan — Co-Founder & Director, AIT Digital Solutions"
                fill
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h2 className="font-heading font-black text-white text-3xl mb-1">Iftikhar-UL-Hassan</h2>
                <p className="text-gold font-semibold mb-1">Co-Founder & Director</p>
                <p className="text-gray-400 text-xs mb-5">AIT Digital Solutions | Top Rated Freelancer</p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: Youtube, v: "2K+", l: "Students"  },
                    { icon: Brain,   v: "8+",  l: "Yrs Exp."  },
                    { icon: Star,    v: "Top", l: "Freelancer"},
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.l} className="border border-gold/15 rounded-xl p-3 bg-black/40 backdrop-blur-sm">
                        <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                        <div className="font-heading font-black text-lg gold-text text-center">{s.v}</div>
                        <div className="text-gray-500 text-[10px] uppercase text-center">{s.l}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* M. Gulzar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Photo Card */}
            <div className="bg-ink rounded-3xl overflow-hidden relative" style={{ minHeight: "min(480px, 70vw)" }}>
              <div className="absolute inset-0 grid-pattern-dark" />
              <Image
                src="/images/team/gulzar.jpg"
                alt="M. Gulzar — Founder & Director, AIT Digital Solutions"
                fill
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h2 className="font-heading font-black text-white text-3xl mb-1">M. Gulzar</h2>
                <p className="text-gold font-semibold mb-1">Founder & Director</p>
                <p className="text-gray-400 text-xs mb-5">AIT Digital Solutions | Thcommerce Company</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Award, v: "8+",  l: "Businesses" },
                    { icon: Globe2, v: "10+", l: "Years Exp." },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.l} className="border border-gold/15 rounded-xl p-3 bg-black/40 backdrop-blur-sm">
                        <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                        <div className="font-heading font-black text-lg gold-text text-center">{s.v}</div>
                        <div className="text-gray-500 text-[10px] uppercase text-center">{s.l}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-badge mb-5 inline-flex">Founder & Director</span>
              <h2 className="font-heading font-black text-ink text-4xl mb-2">M. Gulzar</h2>
              <p className="text-gold font-semibold text-sm mb-5 tracking-wider uppercase">
                Founder & Director | AIT Digital Solutions | Director at Thcommerce Company | Business Operations & Networking Expert | Business Development Strategist | Team Leadership | Operations Management | Entrepreneur
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                M. Gulzar is a seasoned business operations and networking expert whose expertise in managing
                multiple physical businesses forms the operational backbone of AIT Digital Solutions. As the
                Founder & Director of AIT and Director at Thcommerce Company, he brings structured business
                thinking to every decision.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                Throughout his professional journey, Gulzar has focused on developing efficient business systems,
                strengthening organizational operations, and creating valuable partnerships across different industries.
                His expertise lies in transforming ideas into structured business models.
              </p>
              <p className="text-ink-muted leading-relaxed mb-6">
                His vision of combining practical business experience, effective networking, and modern digital strategies
                ensures that AIT operates at the highest standard — delivering consistent quality to every student and client.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {[
                  "Founder — AIT Digital Solutions",
                  "Director — Thcommerce Company",
                  "Business Operations Expert",
                  "Business Development Strategist",
                  "Team Leadership & Management",
                  "8+ Physical Businesses Managed",
                  "Strategic Planning & Execution",
                  "Entrepreneur & Networking Expert",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                    <span className="text-xs text-ink-muted">{r}</span>
                  </div>
                ))}
              </div>
              <p className="text-ink font-semibold italic text-sm border-l-2 border-gold pl-4">
                &ldquo;My mission is to help individuals and businesses achieve long-term success by combining
                practical business experience, effective networking, and modern digital strategies.&rdquo;
                <span className="block text-ink-soft font-normal mt-1">— M. Gulzar</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-white text-4xl mb-4">
            Learn Directly from <span className="gold-text">Industry Experts</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Our founders teach from real experience — not theory. Join a course and learn
            from people who have actually built what they teach.
          </p>
          <Link href="/courses"
            className="btn-gold px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-gold">
            Browse All Courses <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

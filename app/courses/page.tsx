import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  Youtube, ShoppingCart, TrendingUp, Brain,
  Users, Zap, ArrowRight, Clock, Star, CheckCircle, Code2, Smartphone, Palette, Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Courses — Digital Skills Training",
  description:
    "Enroll in AIT Digital Solutions' premium courses: YouTube Automation, TikTok Automation, E-Commerce, Digital Marketing, Freelancing, and AI Tools. Gujranwala, Pakistan. 25,000+ students trained.",
  alternates: { canonical: "https://aitdigitalsolutions.com/courses" },
  openGraph: {
    title: "Digital Skills Courses — AIT Digital Solutions",
    description: "Premium courses in YouTube Automation, Freelancing, AI Tools & more. Learn from real entrepreneurs in Gujranwala, Pakistan.",
    url: "https://aitdigitalsolutions.com/courses",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AIT Digital Solutions Courses" }],
  },
};

export const dynamic = "force-dynamic";

const ICON_MAP: Record<string, React.ElementType> = {
  Youtube, ShoppingCart, TrendingUp, Brain, Users, Zap, Code2, Smartphone, Palette, Package,
};

interface Course {
  id: string; title: string; level: string; duration: string; rating: number;
  students: string; price: string; badge: string; color: string; iconName: string;
  outcome: string; includes: string[];
}

function getCourses(): Course[] {
  try {
    const file = path.join(process.cwd(), "data", "courses.json");
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch { return []; }
}

export default function CoursesPage() {
  const courses = getCourses();

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AIT Digital Solutions Courses",
    description: "Digital skills courses offered by AIT Digital Solutions in Gujranwala, Pakistan",
    url: "https://aitdigitalsolutions.com/courses",
    numberOfItems: courses.length,
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.title,
        description: c.outcome,
        url: "https://aitdigitalsolutions.com/courses",
        provider: {
          "@type": "Organization",
          name: "AIT Digital Solutions",
          sameAs: "https://aitdigitalsolutions.com",
        },
        educationalLevel: c.level,
        timeRequired: `PT${c.duration}`,
        offers: {
          "@type": "Offer",
          price: c.price.replace(/[^0-9,]/g, "").split(",")[0] || "0",
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
          url: "https://aitdigitalsolutions.com/contact",
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      {/* Hero */}
      <section className="pt-32 pb-16 section-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge mb-6 inline-flex">
            <Star className="w-3 h-3 fill-gold" /> Our Courses
          </span>
          <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
            Master Digital Skills.<br />
            <span className="gold-text">Earn Real Income.</span>
          </h1>
          <p className="text-ink-muted text-xl max-w-2xl mx-auto mb-6">
            Practical, outcome-driven courses taught by real entrepreneurs.
            No fluff — just skills that pay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["25,000+ Graduates", "5★ Average Rating", "Lifetime Access", "Certificate Included"].map((b) => (
              <div key={b} className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-full px-4 py-2">
                <CheckCircle className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-medium text-ink">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = ICON_MAP[course.iconName] ?? Package;
              return (
                <div key={course.id} className="card-white overflow-hidden flex flex-col group">
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${course.color}15`, border: `1.5px solid ${course.color}30` }}>
                        <Icon className="w-5 h-5" style={{ color: course.color }} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                        {course.badge}
                      </span>
                    </div>
                    <h3 className="font-heading font-black text-ink text-lg mb-1 leading-tight group-hover:text-gold transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-ink-muted text-xs mb-4 italic">&ldquo;{course.outcome}&rdquo;</p>

                    <div className="flex flex-wrap items-center gap-3 mb-5 pb-5 border-b border-surface-200">
                      <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                        <Users className="w-3.5 h-3.5 text-gold" />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                        <span className="text-xs font-semibold text-ink">{course.rating}.0</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {course.includes.map((item) => (
                        <div key={item} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 text-gold mt-0.5 shrink-0" />
                          <span className="text-[11px] text-ink-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto p-6 pt-4 flex items-center justify-between border-t border-surface-100">
                    <div>
                      <p className="text-[10px] text-ink-soft uppercase tracking-wide">Course Fee</p>
                      <p className="font-heading font-black text-ink text-xl">{course.price}</p>
                    </div>
                    <Link href="/contact"
                      className="btn-gold px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
                      Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bundle offer */}
          <div className="mt-12 bg-ink rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern-dark" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="section-badge bg-gold/10 border-gold/25 text-gold mb-4 inline-flex">Bundle Deal</span>
                <h3 className="font-heading font-black text-white text-2xl md:text-3xl mb-2">
                  Enroll in Multiple Courses &amp; <span className="gold-text">Save 30%</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Contact us for custom bundle pricing. Perfect for students who want to master multiple income streams.
                </p>
              </div>
              <Link href="/contact"
                className="btn-gold px-8 py-4 rounded-full font-bold text-sm shrink-0 inline-flex items-center gap-2 shadow-gold">
                Get Bundle Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  Youtube, ShoppingCart, TrendingUp, Brain, Code2,
  Smartphone, Palette, Users, Zap, ArrowRight, CheckCircle, Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Digital Training & Business Solutions",
  description:
    "Explore AIT Digital Solutions' complete range of digital services in Gujranwala: YouTube Automation, E-Commerce, Digital Marketing, Web Development, AI Tools, Branding, and more. Get a free consultation today.",
  alternates: { canonical: "https://aitdigitalsolutions.com/services" },
  openGraph: {
    title: "Digital Services — AIT Digital Solutions",
    description: "YouTube Automation, E-Commerce, Digital Marketing, Web Dev & more. Pakistan's most trusted digital growth partner.",
    url: "https://aitdigitalsolutions.com/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AIT Digital Solutions Services" }],
  },
};

export const dynamic = "force-dynamic";

const ICON_MAP: Record<string, React.ElementType> = {
  Youtube, ShoppingCart, TrendingUp, Brain, Code2, Smartphone, Palette, Users, Zap, Package,
};

interface Service {
  id: string; title: string; tagline: string; color: string; iconName: string;
  desc: string; features: string[]; price: string; type: string;
}

function getServices(): Service[] {
  try {
    const file = path.join(process.cwd(), "data", "services.json");
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch { return []; }
}

export default function ServicesPage() {
  const services = getServices();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AIT Digital Solutions Services",
    url: "https://aitdigitalsolutions.com/services",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
        url: "https://aitdigitalsolutions.com/services",
        provider: { "@type": "Organization", name: "AIT Digital Solutions", url: "https://aitdigitalsolutions.com" },
        areaServed: { "@type": "Country", name: "Pakistan" },
        offers: { "@type": "Offer", priceCurrency: "PKR", priceSpecification: { "@type": "PriceSpecification", name: s.price } },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="pt-32 pb-16 section-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40%] h-[70%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 10%, #FFF8DC 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge mb-6 inline-flex">
            <Zap className="w-3 h-3" /> Courses & Services
          </span>
          <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Everything You Need to<br />
            <span className="gold-text">Win in the Digital World</span>
          </h1>
          <p className="text-ink-muted text-xl max-w-2xl mx-auto mb-8">
            From training courses to done-for-you services — AIT Digital Solutions is your
            complete digital partner. Learn the skills, then let us execute for you.
          </p>
          <Link href="/contact"
            className="btn-gold px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-gold">
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc) => {
              const Icon = ICON_MAP[svc.iconName] ?? Package;
              return (
                <div key={svc.id} className="card-white p-8 group">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={{ background: `${svc.color}15`, border: `1.5px solid ${svc.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: svc.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-heading font-black text-ink text-xl">{svc.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                          {svc.type}
                        </span>
                      </div>
                      <p className="text-gold font-semibold text-sm mt-0.5">{svc.tagline}</p>
                    </div>
                  </div>

                  <p className="text-ink-muted text-sm leading-relaxed mb-5">{svc.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                        <span className="text-xs text-ink-muted">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-surface-200">
                    <div>
                      <p className="text-xs text-ink-soft mb-0.5">Starting Price</p>
                      <p className="font-heading font-black text-ink text-lg">{svc.price}</p>
                    </div>
                    <Link href="/contact"
                      className="btn-gold px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
                      Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-5">
            Not Sure Which Service<br />
            <span className="gold-text">Is Right for You?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute consultation and our experts will help you identify
            the best path to achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-gold">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/923166768001" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold px-8 py-4 rounded-full font-bold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

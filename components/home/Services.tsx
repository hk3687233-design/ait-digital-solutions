"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Youtube, ShoppingCart, TrendingUp, Brain, Code2,
  Smartphone, Palette, Users, ArrowUpRight, Zap, CheckCircle,
} from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";

const featured = [
  {
    icon: Youtube,
    title: "YouTube Automation",
    img: "/images/services/yt-automation.jpg",
    tagline: "Automate · Optimize · Grow",
    caption: "Most people think YouTube Automation is just another way to make money online. It isn't — it's about building a digital asset that generates value for years.",
    points: [
      "Create content without showing your face",
      "Use AI and smart systems to scale faster",
      "Earn through AdSense, affiliate marketing & sponsorships",
      "Build a brand that works for you 24/7",
    ],
    cta: "Automate Today. Grow Forever.",
    color: "#FF0000",
    tags: ["Passive Income", "AI Tools", "Monetization"],
  },
  {
    icon: Zap,
    title: "TikTok Automation",
    img: "/images/services/tiktok-automation.jpg",
    tagline: "Automate · Optimize · Grow",
    caption: "TikTok is no longer just entertainment — it's one of the fastest ways to build attention, grow a brand, and reach millions organically.",
    points: [
      "Publish consistently with AI-powered workflows",
      "Grow multiple niche accounts efficiently",
      "Reach a global audience without heavy ad spend",
      "Turn short-form content into long-term business",
    ],
    cta: "Automate Today. Dominate Tomorrow.",
    color: "#010101",
    tags: ["Viral Growth", "Content AI", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Automation",
    img: "/images/services/ecommerce-automation.jpg",
    tagline: "Automate · Optimize · Scale",
    caption: "The way people shop has changed forever. E-Commerce is not just about opening an online store — it's about building a system that grows over time.",
    points: [
      "Sell products 24/7 without limits of a physical store",
      "Reach customers across your city, country, or the world",
      "Scale with digital marketing, AI, and automation",
      "Turn ideas into profitable online businesses",
    ],
    cta: "Build. Automate. Scale Your Store.",
    color: "#F5B400",
    tags: ["Shopify", "Dropshipping", "Sales Growth"],
  },
];

const rest = [
  { icon: TrendingUp,  title: "Digital Marketing",     desc: "Data-driven marketing across SEO, social media, paid ads, and email campaigns that deliver measurable ROI.", tags: ["SEO", "Paid Ads", "Social Media"], color: "#F5B400" },
  { icon: Users,       title: "Freelancing Mastery",   desc: "From profile setup to landing 5-figure clients — master Upwork, Fiverr, and LinkedIn to build a thriving freelance career.", tags: ["Upwork", "Fiverr", "Client Acquisition"], color: "#1DBF73" },
  { icon: Brain,       title: "AI Tools Training",     desc: "Master the most powerful AI tools — ChatGPT, Midjourney, automation workflows — and future-proof your career.", tags: ["ChatGPT", "Midjourney", "Automation"], color: "#7C3AED" },
  { icon: Code2,       title: "Web Development",       desc: "Premium websites and web apps built with modern tech stacks — fast, responsive, and optimized for conversions.", tags: ["React", "Next.js", "WordPress"], color: "#0EA5E9" },
  { icon: Smartphone,  title: "Mobile App Development",desc: "Cross-platform mobile applications that deliver seamless user experiences and drive business growth.", tags: ["iOS", "Android", "Flutter"], color: "#F59E0B" },
  { icon: Palette,     title: "Branding & Design",     desc: "Build a brand identity that commands premium pricing — logo, visual system, and brand strategy for lasting impact.", tags: ["Logo Design", "Brand Identity", "UI/UX"], color: "#EC4899" },
];

export default function Services() {
  return (
    <section className="section-soft section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-5 inline-flex">
            <Zap className="w-3 h-3" /> What We Offer
          </span>
          <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-5">
            Courses &amp; Services <br />
            <span className="gold-text">Built for Results</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Everything you need to learn, launch, and scale in the digital economy —
            under one roof, guided by experts.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        {/* Featured 3 — YT, TikTok, E-Commerce */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {featured.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeUp key={svc.title} delay={i * 0.1}>
              <div className="card-white overflow-hidden group flex flex-col h-full">
                {/* Gold top bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

                {/* Marketing Image */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square bg-ink overflow-hidden">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink"
                    style={{ opacity: 0 }}>
                    <Icon className="w-16 h-16 text-gold mb-3" />
                    <span className="font-heading font-black text-white text-xl">{svc.title}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${svc.color}20`, border: `1px solid ${svc.color}40` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: svc.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-ink text-base group-hover:text-gold transition-colors">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-[10px] text-gold font-semibold tracking-wider uppercase mb-3">{svc.tagline}</p>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">{svc.caption}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {svc.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                        <span className="text-xs text-ink-muted">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-surface-100 pt-4">
                    <p className="text-[10px] font-bold text-ink uppercase tracking-wider mb-3">{svc.cta}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span key={tag}
                          className="text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-surface-100 text-ink-soft border border-surface-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Rest of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeUp key={svc.title} delay={i * 0.07}>
              <div className="card-white p-6 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}>
                  <Icon className="w-5 h-5" style={{ color: svc.color }} />
                </div>
                <h3 className="font-heading font-bold text-ink text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map((tag) => (
                    <span key={tag}
                      className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-surface-100 text-ink-soft border border-surface-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="/services"
            className="btn-ink px-6 sm:px-10 py-4 rounded-full text-sm font-bold tracking-wide inline-flex items-center gap-2">
            View All Services &amp; Courses <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

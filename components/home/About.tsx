"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Lightbulb, Target, Zap, Users, Globe2, BookOpen, Award } from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const whyUs = [
  { icon: Lightbulb, title: "Practical, Not Theoretical",  desc: "Every lesson is based on real business experience — not textbook theory." },
  { icon: Target,    title: "Outcome-Oriented Learning",   desc: "We focus on results. Students leave with skills they can monetize immediately." },
  { icon: Zap,       title: "AI-First Approach",           desc: "We integrate the latest AI tools into every course to keep you ahead of the curve." },
];

const stats = [
  { icon: Users,    end: 25000, suffix: "+", label: "Students Trained"  },
  { icon: Globe2,   end: 80000, suffix: "+", label: "Social Followers"  },
  { icon: BookOpen, end: 6,     suffix: "+", label: "Courses Offered"   },
  { icon: Award,    end: 9,     suffix: "+", label: "Services Offered"  },
];

const pillars = [
  "AI-Powered Practical Curriculum",
  "Real Business Results — Not Just Theory",
  "3 Expert Founders with Industry Experience",
  "9 Services Under One Digital Ecosystem",
  "Online & In-Person Training Available",
  "Lifetime Community Support",
];

export default function About() {
  return (
    <section className="section-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left – Visual block */}
          <FadeUp className="relative order-2 lg:order-1">

            {/* Founders photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Arslan – tall left card */}
              <div className="relative rounded-2xl overflow-hidden shadow-card" style={{ aspectRatio: "3/4", minHeight: 0 }}>
                <Image
                  src="/images/team/arslan.jpg"
                  alt="Arslan Ahmad — Co-Founder & CEO"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading font-bold text-white text-sm leading-tight">Arslan Ahmad</p>
                  <p className="text-gold text-[10px] font-semibold">Co-Founder & CEO</p>
                </div>
              </div>

              {/* Right column — Iftikhar + Gulzar stacked */}
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden shadow-card" style={{ aspectRatio: "3/2", minHeight: 0 }}>
                  <Image
                    src="/images/team/iftikhar.jpg"
                    alt="Iftikhar-UL-Hassan — Co-Founder & Director"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-heading font-bold text-white text-xs leading-tight">Iftikhar-UL-Hassan</p>
                    <p className="text-gold text-[9px] font-semibold">Co-Founder & Director</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-card" style={{ aspectRatio: "3/2", minHeight: 0 }}>
                  <Image
                    src="/images/team/gulzar.jpg"
                    alt="M. Gulzar — Founder & Director"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-heading font-bold text-white text-xs leading-tight">M. Gulzar</p>
                    <p className="text-gold text-[9px] font-semibold">Founder & Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row below photos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="card-white p-3 text-center rounded-xl border border-surface-200">
                    <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                    <div className="font-heading font-black text-ink text-lg leading-none">
                      <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                    </div>
                    <div className="text-[9px] text-ink-soft uppercase tracking-wide mt-0.5 leading-tight">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </FadeUp>

          {/* Right – Content */}
          <FadeUp delay={0.15} className="order-1 lg:order-2">
            <span className="section-badge mb-5 inline-flex">About Us</span>

            <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              More Than a Training Hub —<br />
              <span className="gold-text">A Digital Ecosystem</span>
            </h2>

            <p className="text-ink-muted text-base leading-relaxed mb-5">
              AIT Digital Solutions was founded with one mission: to bridge the gap between
              traditional education and the rapidly evolving digital economy. Located in
              Gujranwala, we serve students and businesses across all of Pakistan.
            </p>

            <p className="text-ink-muted text-base leading-relaxed mb-8">
              Co-founded by <strong className="text-ink">Arslan Ahmad</strong> (CEO),{" "}
              <strong className="text-ink">Iftikhar-UL-Hassan</strong> (Director), and{" "}
              <strong className="text-ink">M. Gulzar</strong> (Director) — our team brings
              real-world expertise from 8+ physical businesses, authorship, public speaking,
              and decades of entrepreneurial experience.
            </p>

            {/* Why Us */}
            <div className="space-y-4 mb-8">
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-surface-200 hover:border-gold/25 hover:bg-surface-50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-ink text-sm mb-0.5">{item.title}</h4>
                      <p className="text-ink-soft text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AIT Company Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {pillars.map((a) => (
                <div key={a} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-ink-muted text-xs">{a}</span>
                </div>
              ))}
            </div>

            <Link href="/about"
              className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-gold">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

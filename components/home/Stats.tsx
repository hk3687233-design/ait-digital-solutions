"use client";

import { Award, BookOpen, Globe2, Star } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FadeUp from "@/components/shared/FadeUp";

const stats = [
  { value: 25000, suffix: "+", label: "Students Trained",  icon: BookOpen, desc: "Across seminars, workshops & online programs" },
  { value: 80000, suffix: "+", label: "Social Followers",  icon: Globe2,   desc: "Built across multiple social media platforms" },
  { value: 9,     suffix: "+", label: "Courses Offered",   icon: Award,    desc: "From YouTube Automation to Web Development"   },
  { value: 8,     suffix: "+", label: "Digital Services",  icon: Star,     desc: "From training to full business solutions"     },
];

const pillars = [
  { label: "AI Powered",    icon: "⚡" },
  { label: "Result Driven", icon: "🎯" },
  { label: "Future Ready",  icon: "🚀" },
];

export default function Stats() {
  return (
    <section className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #F5B400 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pillars */}
        <FadeUp className="flex flex-wrap justify-center gap-4 mb-16">
          {pillars.map((p) => (
            <div key={p.label}
              className="flex items-center gap-2.5 border border-gold/20 rounded-full px-5 py-2.5 bg-gold/5 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300">
              <span className="text-lg">{p.icon}</span>
              <span className="text-sm font-bold text-white tracking-widest uppercase">{p.label}</span>
            </div>
          ))}
        </FadeUp>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center mx-auto mb-4 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="font-heading font-black text-3xl md:text-4xl lg:text-5xl gold-text mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white font-semibold font-heading text-sm mb-1 uppercase tracking-wide">{s.label}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Headline */}
        <FadeUp delay={0.2} className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight mb-4">
            Building Pakistan&apos;s <span className="gold-text">Digital Future</span><br />One Student at a Time
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            From Gujranwala to the world — AIT Digital Solutions has become the
            go-to platform for ambitious individuals who want to master the digital economy
            and build businesses that scale.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

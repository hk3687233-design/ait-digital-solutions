"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";


export default function Ecosystem() {
  return (
    <section className="section-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40 pointer-events-none" />

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,180,0,0.07) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <FadeUp>
            <span className="section-badge mb-6 inline-flex">Digital Ecosystem</span>
            <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-6">
              One Ecosystem.<br />
              <span className="gold-text">Infinite Possibilities.</span>
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed mb-6">
              AIT Digital Solutions is not just a training institute — it&apos;s a complete digital
              ecosystem empowering creators, entrepreneurs, and businesses with AI-driven solutions
              for a smarter digital future.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {[
                { icon: "🤖", label: "AI Powered" },
                { icon: "🎯", label: "Result Driven" },
                { icon: "🚀", label: "Future Ready" },
              ].map((p) => (
                <div key={p.label} className="text-center p-4 rounded-2xl bg-surface-50 border border-surface-200">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="text-xs font-bold text-ink uppercase tracking-wider">{p.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-8">
              {[
                "AI Tools · YouTube · TikTok Automation",
                "E-Commerce · Digital Marketing · Freelancing",
                "Web & App Development · Branding · Content",
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-sm text-ink-muted">{line}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/services"
                className="btn-gold px-8 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-gold">
                Explore Ecosystem <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/923166768001" target="_blank" rel="noopener noreferrer"
                className="btn-outline px-8 py-3.5 rounded-full font-bold text-sm">
                WhatsApp Us
              </a>
            </div>
          </FadeUp>

          {/* Right: Ecosystem Banner Image */}
          <FadeUp delay={0.15} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gold/20">
              <Image
                src="/images/banners/ecosystem.jpg"
                alt="AIT Digital Ecosystem — One Ecosystem, Infinite Possibilities"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Fallback SVG hub if image not provided */}
              <div className="ecosystem-fallback absolute inset-0 bg-ink flex items-center justify-center"
                style={{ display: "none" }}>
                <EcosystemFallback />
              </div>
            </div>

            {/* Floating pill */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gold/30 rounded-full px-4 sm:px-6 py-3 shadow-gold flex items-center gap-3 text-xs sm:text-sm whitespace-nowrap z-10">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-heading font-bold text-ink text-sm">Build · Grow · Lead</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function EcosystemFallback() {
  const services = ["AI Tools", "YouTube", "Mobile Apps", "Freelancing", "Branding", "E-Commerce", "Automation", "Websites"];
  const r = 160;
  const cx = 250;
  const cy = 200;

  return (
    <svg viewBox="0 0 500 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r + 10} fill="none" stroke="#F5B40030" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F5B40060" strokeWidth="1.5" strokeDasharray="6 4" />

      {/* Spokes + nodes */}
      {services.map((label, i) => {
        const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
        const nx = cx + r * Math.cos(angle);
        const ny = cy + r * Math.sin(angle);
        return (
          <g key={label}>
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#F5B40025" strokeWidth="1" />
            <circle cx={nx} cy={ny} r={24} fill="#111111" stroke="#F5B400" strokeWidth="1.5" />
            <text x={nx} y={ny + 1} textAnchor="middle" dominantBaseline="middle"
              fill="#F5B400" fontSize="6" fontFamily="sans-serif" fontWeight="bold">
              {label.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r={55} fill="#111111" stroke="#F5B400" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={45} fill="#111111" stroke="#F5B40040" strokeWidth="1" />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#F5B400" fontSize="14" fontFamily="sans-serif" fontWeight="bold">AIT</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#ffffff80" fontSize="5.5" fontFamily="sans-serif">DIGITAL SOLUTIONS</text>
    </svg>
  );
}

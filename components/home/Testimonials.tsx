"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";

interface Testimonial { id: string; name: string; role: string; rating: number; text: string; initial: string }

const FALLBACK: Testimonial[] = [
  { id:"1", name:"Ahmed Raza",    role:"Freelance Designer — Gujranwala",       rating:5, initial:"A", text:"AIT changed my life. Within 3 months of their Freelancing course I was earning $800/month on Upwork. The practical approach is unlike anything else I've tried." },
  { id:"2", name:"Sana Malik",    role:"YouTube Creator — Lahore",               rating:5, initial:"S", text:"The YouTube Automation course is gold. My channel went from 0 to 15,000 subscribers in 4 months using exactly what they taught. Incredible mentorship." },
  { id:"3", name:"Bilal Hussain", role:"E-Commerce Entrepreneur — Faisalabad",   rating:5, initial:"B", text:"The E-Commerce training helped me launch my Shopify store and make my first sale in week 2. The community support is amazing. Worth every rupee." },
  { id:"4", name:"Fareeha Naz",   role:"Digital Marketer — Gujranwala",          rating:5, initial:"F", text:"Arslan bhai explains complex digital marketing concepts in the simplest way. My agency now handles 5 clients thanks to AIT's Digital Marketing course." },
  { id:"5", name:"Usman Tariq",   role:"AI Tools Specialist — Islamabad",        rating:5, initial:"U", text:"The AI Tools training is the most up-to-date content I've found in Pakistan. I now automate 80% of my work and charge premium rates to clients." },
  { id:"6", name:"Zara Khan",     role:"Content Creator — Karachi",              rating:5, initial:"Z", text:"AIT is not just a course platform — it's a complete ecosystem. From strategy to execution, they have everything a digital creator needs to grow." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK);

  useEffect(() => {
    fetch("/api/admin")
      .then(r => r.json())
      .then(d => { if (Array.isArray(d.testimonials) && d.testimonials.length > 0) setTestimonials(d.testimonials); })
      .catch(() => {});
  }, []);

  return (
    <section className="section-white section-padding relative overflow-hidden">
      {/* Faint glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,180,0,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <span className="section-badge mb-5 inline-flex">
            <Star className="w-3 h-3 fill-gold" /> Student Success Stories
          </span>
          <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-5">
            Real Results from<br />
            <span className="gold-text">Real Students</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">
            Join 25,000+ students who have transformed their careers and
            businesses with AIT Digital Solutions.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </FadeUp>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.id} delay={i * 0.08} className="break-inside-avoid">
            <div
              className="card-white p-6 group"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-3" />
              <p className="text-ink-muted text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <span className="font-heading font-black text-gold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-ink-soft text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>

        {/* Rating summary */}
        <FadeUp delay={0.2}>
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-surface-50 rounded-3xl border border-surface-200">
          <div className="text-center">
            <div className="font-heading font-black text-5xl gold-text">5.0</div>
            <div className="flex justify-center my-2">
              <StarRating count={5} />
            </div>
            <p className="text-ink-soft text-sm">Average Rating</p>
          </div>
          <div className="w-px h-20 bg-surface-200 hidden md:block" />
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { value: "25K+", label: "Students" },
              { value: "98%",  label: "Satisfaction" },
              { value: "4.9★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-black text-2xl text-ink">{s.value}</div>
                <div className="text-ink-soft text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}

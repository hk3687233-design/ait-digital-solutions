"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import FadeUp from "@/components/shared/FadeUp";

export default function CTA() {
  return (
    <section className="section-dark section-padding relative overflow-hidden">
      {/* Animated aurora glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(ellipse, rgba(245,180,0,0.15) 0%, transparent 65%)",
            animation: "aurora 8s ease infinite",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Pulsing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-64 h-64 rounded-full border border-gold/10 ring-pulse" />
        <div className="absolute inset-0 w-64 h-64 rounded-full border border-gold/8 ring-pulse-delay" />
      </div>

      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-xl" />

      <FadeUp className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-badge bg-gold/10 border-gold/25 text-gold/90 mb-8 inline-flex">
          Start Today — It&apos;s Free to Begin
        </span>

        <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-6xl leading-[1.05] mb-6">
          Your Digital Future<br />
          <span className="gold-shimmer">Starts Right Now</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join 25,000+ students who have already taken the leap.
          Learn. Build. Scale — with Pakistan&apos;s premier digital skills ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="btn-gold w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-bold shadow-gold inline-flex items-center justify-center gap-2"
            >
              Enroll Now — Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <a
              href="tel:+923166768001"
              className="btn-outline-gold w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us: 0316 6768001
            </a>
          </motion.div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-8 border-t border-white/10">
          {[
            "✓ No Hidden Fees",
            "✓ Practical Curriculum",
            "✓ Lifetime Support",
            "✓ Certificate Included",
          ].map((badge) => (
            <span key={badge} className="text-gray-500 text-sm font-medium">{badge}</span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

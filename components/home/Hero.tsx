"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const highlights = [
  "25,000+ Students Trained",
  "AI-Powered Curriculum",
  "Real Business Results",
];

const floatingBadges = [
  { label: "YouTube Automation", icon: "▶", top: "18%", left: "5%",  delay: "0s"   },
  { label: "AI Tools",           icon: "⚡", top: "55%", left: "2%",  delay: "1.2s" },
  { label: "E-Commerce",         icon: "🛒", top: "20%", right: "4%", delay: "0.6s" },
  { label: "Freelancing",        icon: "💼", top: "60%", right: "3%", delay: "1.8s" },
];

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top  - rect.height / 2) * 0.3);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from(
      { length: 32 },
      () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      })
    );

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(245,180,0,${0.2 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,180,0,0.5)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Aurora animated mesh */}
      <div className="absolute inset-0 aurora-mesh opacity-60 pointer-events-none" />

      {/* Subtle radial warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-[70%] rounded-full opacity-40"
          style={{ background: "radial-gradient(ellipse at 80% 20%, #FFF3B0 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] rounded-full opacity-25"
          style={{ background: "radial-gradient(ellipse at 20% 80%, #FFFACD 0%, transparent 55%)" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern-light opacity-40 pointer-events-none" />

      {/* AI Network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Floating badges */}
      {floatingBadges.map((b) => (
        <div
          key={b.label}
          className="hidden xl:flex absolute items-center gap-2 card-glass px-4 py-2.5 rounded-full text-xs font-semibold text-ink shadow-card"
          style={{
            top: b.top, left: b.left, right: b.right,
            animation: `float 6s ease-in-out ${b.delay} infinite`,
          }}
        >
          <span className="text-base">{b.icon}</span>
          {b.label}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <span className="section-badge">
              <Sparkles className="w-3 h-3 text-gold" />
              Pakistan&apos;s #1 Digital Skills Hub — Gujranwala
            </span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <motion.h1
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="font-heading font-black text-ink leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(1.9rem, 6vw, 5rem)" }}
          >
            {["One", "Digital"].map((word) => (
              <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordVariant} className="inline-block relative">
              <span className="gold-shimmer">Ecosystem.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <motion.path
                  d="M2 6C60 2 180 2 298 6"
                  stroke="#F5B400"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </motion.span>
            <br />
            {["Infinite", "Possibilities."].map((word, i) => (
              <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-ink-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Empowering creators, entrepreneurs, and businesses with AI-driven training
            and cutting-edge digital services for a smarter future.
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm font-medium text-ink-light">{h}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href="/courses"
              className="btn-gold px-8 py-4 rounded-full text-base gap-2 shadow-gold inline-flex items-center"
            >
              Explore Courses <ArrowRight className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              href="/services"
              className="btn-outline px-8 py-4 rounded-full text-base gap-2 inline-flex items-center"
            >
              Our Services
            </MagneticButton>

            <a
              href="https://wa.me/923166768001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors duration-200 group"
            >
              <span className="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <Play className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              </span>
              Free Consultation
            </a>
          </motion.div>

          {/* Stats ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-surface-200 rounded-2xl overflow-hidden shadow-card"
          >
            {[
              { end: 25000, suffix: "+", label: "Students Trained" },
              { end: 80000, suffix: "+", label: "Social Followers"  },
              { end: 9,     suffix: "+", label: "Services Offered"  },
              { end: 100,   suffix: "%", label: "Result Focused"    },
            ].map((s) => (
              <div key={s.label} className="bg-white flex flex-col items-center justify-center py-6 px-4 group hover:bg-gold/5 transition-colors duration-300">
                <span className="counter-number text-2xl sm:text-3xl md:text-4xl gold-text font-heading font-black">
                  <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                </span>
                <span className="text-xs text-ink-soft mt-1 font-medium tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-50 to-transparent pointer-events-none" />
    </section>
  );
}

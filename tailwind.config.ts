import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F5B400",
          light:   "#FFD000",
          dark:    "#D4A000",
          muted:   "#F5B40020",
          50:      "#FFFBEB",
          100:     "#FFF3C4",
          200:     "#FFE580",
          300:     "#FFD640",
          400:     "#F5B400",
          500:     "#D4A000",
          600:     "#B38600",
          700:     "#8A6700",
        },
        ink: {
          DEFAULT: "#111111",
          light:   "#222222",
          muted:   "#555555",
          soft:    "#888888",
          pale:    "#BBBBBB",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          50:      "#FAFAFA",
          100:     "#F5F5F5",
          200:     "#EEEEEE",
          300:     "#E0E0E0",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)",        "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)",   "sans-serif"],
        display: ["var(--font-playfair)",     "serif"],
      },
      backgroundImage: {
        "gold-gradient":     "linear-gradient(135deg, #F5B400 0%, #FFD000 50%, #D4A000 100%)",
        "gold-shimmer":      "linear-gradient(90deg, #D4A000, #FFD000, #F5B400, #FFD000, #D4A000)",
        "hero-gradient":     "radial-gradient(ellipse 80% 60% at 60% 40%, #FFF8DC 0%, #FFFFFF 65%)",
        "section-gradient":  "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        "dark-section":      "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
        "card-glass":        "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
      },
      boxShadow: {
        gold:        "0 4px 24px rgba(245,180,0,0.25)",
        "gold-lg":   "0 8px 40px rgba(245,180,0,0.35)",
        "gold-glow": "0 0 60px rgba(245,180,0,0.20)",
        card:        "0 2px 20px rgba(17,17,17,0.08)",
        "card-hover":"0 8px 40px rgba(17,17,17,0.14)",
        glass:       "0 8px 32px rgba(17,17,17,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        premium:     "0 20px 60px rgba(17,17,17,0.12), 0 4px 16px rgba(245,180,0,0.10)",
      },
      animation: {
        "float":          "float 6s ease-in-out infinite",
        "float-delay":    "float 6s ease-in-out 2s infinite",
        "pulse-gold":     "pulse-gold 3s ease-in-out infinite",
        "shimmer":        "shimmer 3s linear infinite",
        "spin-slow":      "spin 10s linear infinite",
        "fade-up":        "fade-up 0.6s ease forwards",
        "glow-pulse":     "glow-pulse 2s ease-in-out infinite alternate",
        "border-flow":    "border-flow 3s linear infinite",
        "marquee":        "marquee 30s linear infinite",
        "marquee-reverse":"marquee-reverse 30s linear infinite",
        "aurora":         "aurora 12s ease infinite",
        "glow-border":    "glow-border 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-18px)" },
        },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 4px 24px rgba(245,180,0,0.15)" },
          "50%":     { boxShadow: "0 4px 40px rgba(245,180,0,0.45)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "from": { opacity: "0.4" },
          "to":   { opacity: "1"   },
        },
        "border-flow": {
          "0%,100%": { backgroundPosition: "0% 50%"   },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        "marquee": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "aurora": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        "glow-border": {
          "0%,100%": { opacity: "0.4", boxShadow: "0 0 20px rgba(245,180,0,0.1)" },
          "50%":     { opacity: "1",   boxShadow: "0 0 40px rgba(245,180,0,0.3)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

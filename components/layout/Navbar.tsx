"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home",           href: "/"               },
  { label: "About",          href: "/about"          },
  { label: "Services",       href: "/services"       },
  { label: "Courses",        href: "/courses"        },
  { label: "Free Resources", href: "/free-resources" },
  { label: "Team",           href: "/team"           },
  { label: "Contact",        href: "/contact"        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const clickTimesRef = useRef<number[]>([]);
  const router = useRouter();

  const handleLogoClick = () => {
    const now = Date.now();
    clickTimesRef.current = [...clickTimesRef.current, now].filter(t => now - t < 10000);
    if (clickTimesRef.current.length >= 5) {
      clickTimesRef.current = [];
      router.push("/admin");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(17,17,17,0.10)] border-b border-surface-200"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div onClick={handleLogoClick} onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleLogoClick()} role="button" tabIndex={0} className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="AIT Digital Solutions Logo"
                fill
                sizes="48px"
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-ink text-sm leading-tight tracking-wide">
                AIT Digital Solutions
              </p>
              <p className="text-[9px] text-ink-soft tracking-[0.18em] uppercase">
                Training · Services · Growth
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200 hover-underline tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+923166768001"
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-gold transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">0316 6768001</span>
            </a>
            <Link
              href="/contact"
              className="btn-gold px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-gold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-surface-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-surface-200 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-ink-muted hover:text-ink hover:bg-surface-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 flex flex-col gap-3">
              <a
                href="tel:+923166768001"
                className="flex items-center gap-2 text-ink-muted text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-gold" />
                0316 6768001
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-gold px-5 py-3 rounded-full text-sm font-bold text-center"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

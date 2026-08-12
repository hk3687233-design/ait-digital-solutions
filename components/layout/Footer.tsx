import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight, Globe } from "lucide-react";

const services = [
  "YouTube Automation", "TikTok Automation", "E-Commerce Automation",
  "Digital Marketing", "Freelancing", "AI Tools Training",
  "Web Development", "Mobile App Development", "Branding",
];

const quickLinks = [
  { label: "Home",           href: "/"               },
  { label: "About Us",       href: "/about"          },
  { label: "Services",       href: "/services"       },
  { label: "Courses",        href: "/courses"        },
  { label: "Free Resources", href: "/free-resources" },
  { label: "Our Team",       href: "/team"           },
  { label: "Contact",        href: "/contact"        },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern-dark opacity-60 pointer-events-none" />

      {/* Gold top bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white">
              Ready to <span className="gold-text">Transform</span> Your Digital Future?
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Join 25,000+ students who have started their journey with AIT.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact"
              className="btn-gold px-7 py-3 rounded-full font-bold text-sm shadow-gold inline-flex items-center gap-2">
              Start Learning <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/923166768001" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold px-7 py-3 rounded-full font-bold text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="AIT Digital Solutions Logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm leading-tight">AIT Digital Solutions</p>
                <p className="text-[9px] text-gold/50 tracking-[0.15em] uppercase">Training · Services · Growth</p>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Pakistan&apos;s premier digital skills training and business growth hub.
              Empowering creators, entrepreneurs, and businesses with AI-driven solutions.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook,  href: "https://www.facebook.com/people/AIT-Digital-Solutions/61592822961571/" },
                { icon: Instagram, href: "#" },
                { icon: Youtube,   href: "#" },
                { icon: Globe,     href: "https://aitdigitalsolutions.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-gold" /> Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href} className="py-1">
                  <Link href={link.href}
                    className="text-gray-500 hover:text-gold text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-gold" /> Our Services
            </h4>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s} className="py-1">
                  <Link href="/services"
                    className="text-gray-500 hover:text-gold text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-gold" /> Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone,  label: "Phone / WhatsApp", value: "0316 6768001",                     href: "tel:+923166768001",                     note: "Mon–Sat, 9AM–9PM" },
                { icon: Mail,   label: "Email",            value: "info@aitdigitalsolutions.com",      href: "mailto:info@aitdigitalsolutions.com",    note: "Reply within 24 hrs" },
                { icon: MapPin, label: "Location",         value: "Gujranwala, Punjab, Pakistan",      href: "https://maps.google.com/?q=Gujranwala", note: "Walk-ins welcome" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 text-gray-500 hover:text-gold transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold/25 transition-all">
                        <Icon className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 mb-0.5">{item.label}</p>
                        <p className="text-sm font-medium text-gray-300 group-hover:text-gold transition-colors">{item.value}</p>
                        <p className="text-[10px] text-gray-600">{item.note}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} AIT Digital Solutions. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Crafted with <span className="text-gold">♦</span> in Gujranwala, Pakistan
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-gray-600 hover:text-gold text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-gray-600 hover:text-gold text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact AIT Digital Solutions in Gujranwala, Pakistan. Call or WhatsApp 0316 6768001 for courses, services, or a free consultation. Email: info@aitdigitalsolutions.com.",
  alternates: { canonical: "https://aitdigitalsolutions.com/contact" },
  openGraph: {
    title: "Contact AIT Digital Solutions",
    description: "Reach out for courses, services, or a free 30-minute consultation. WhatsApp: 0316 6768001. Gujranwala, Pakistan.",
    url: "https://aitdigitalsolutions.com/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact AIT Digital Solutions" }],
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "0316 6768001",
    href:  "tel:+923166768001",
    desc:  "Available 9AM – 9PM (Mon–Sat)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@aitdigitalsolutions.com",
    href:  "mailto:info@aitdigitalsolutions.com",
    desc:  "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujranwala, Punjab, Pakistan",
    href:  "https://maps.google.com/?q=32.1877,74.1945",
    desc:  "Walk-in consultations available",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 9AM – 9PM",
    href:  null,
    desc:  "Sunday: By appointment only",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 section-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge mb-6 inline-flex">Contact Us</span>
          <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
            Let&apos;s Build Something<br />
            <span className="gold-text">Great Together</span>
          </h1>
          <p className="text-ink-muted text-base sm:text-xl max-w-xl mx-auto">
            Have a question about our courses or services? We&apos;re here to help.
            Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-ink rounded-3xl p-8 relative overflow-hidden mb-6">
                <div className="absolute inset-0 grid-pattern-dark" />
                <div className="relative z-10">
                  <h2 className="font-heading font-black text-white text-2xl mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 text-sm mb-8">
                    We&apos;re based in Gujranwala but serve clients and students across all of Pakistan.
                  </p>
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const Wrapper = item.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={item.label}
                        {...(item.href ? {
                          href: item.href,
                          ...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                        } : {})}
                        className="flex items-start gap-4 mb-5 group cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-xl border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-200">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-0.5">{item.label}</p>
                          <p className="text-white font-semibold text-sm group-hover:text-gold transition-colors">{item.value}</p>
                          <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/923166768001?text=Hi%20AIT!%20I%27d%20like%20to%20know%20more%20about%20your%20courses%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">Chat on WhatsApp</p>
                  <p className="text-ink-soft text-xs">Fastest response — usually within minutes</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-white p-8 md:p-10">
                <h2 className="font-heading font-black text-ink text-2xl mb-2">Send Us a Message</h2>
                <p className="text-ink-muted text-sm mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-64 rounded-3xl overflow-hidden border border-surface-200 bg-surface-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-heading font-bold text-ink">Gujranwala, Punjab, Pakistan</p>
              <a href="https://maps.google.com/?q=32.1877,74.1945" target="_blank" rel="noopener noreferrer"
                className="text-gold text-sm hover:underline mt-1 inline-block">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

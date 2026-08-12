import type { Metadata } from "next";
import Link from "next/link";
import { FileText, BookOpen, CreditCard, AlertTriangle, RefreshCw, Scale, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for AIT Digital Solutions — your agreement when using our courses and digital services. Gujranwala, Pakistan.",
  alternates: { canonical: "https://aitdigitalsolutions.com/terms" },
};

const sections = [
  {
    icon: FileText,
    number: "01",
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the AIT Digital Solutions website, enrolling in any course, or availing any of our digital services, you agree to be bound by these Terms of Service.",
      "If you are enrolling on behalf of a business or organisation, you represent that you have the authority to bind that entity to these terms.",
      "We reserve the right to update these terms at any time. Continued use of our services after any change constitutes your acceptance of the revised terms.",
      "If you do not agree with any part of these terms, please discontinue use of our website and services immediately.",
    ],
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Courses & Services",
    body: [
      "AIT Digital Solutions offers digital skills training courses (YouTube Automation, TikTok Automation, E-Commerce, Freelancing, AI Tools, Digital Marketing, Web & App Development, Graphic Design) and professional digital services.",
      "Course content, schedules, instructors, and delivery methods (live online, recorded, or in-person) are subject to change. We will notify enrolled students of any significant modifications.",
      "All courses require active participation and completion of assignments to receive a certificate of completion.",
      "We reserve the right to refuse service, terminate accounts, or cancel enrollments at our sole discretion, including cases of payment disputes, violation of community guidelines, or fraudulent activity.",
      "Digital services (website development, marketing campaigns, store management, etc.) are governed by individual service agreements or proposals agreed upon before work commences.",
    ],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Payments & Refunds",
    body: [
      "All course and service fees are clearly communicated before purchase. Prices are stated in Pakistani Rupees (PKR) unless otherwise specified.",
      "Payment is required in full before access to course materials is granted, unless a specific instalment plan has been agreed in writing.",
      "Refund requests submitted within 3 days of enrollment and before accessing more than 20% of the course content may be eligible for a full refund at our discretion.",
      "No refunds will be issued after a student has attended live sessions, downloaded course materials, or received service deliverables.",
      "In the event we cancel a course before it begins, enrolled students will receive a full refund or credit toward another course of equal value.",
      "For digital services, deposits paid to initiate a project are non-refundable once work has commenced.",
    ],
  },
  {
    icon: Scale,
    number: "04",
    title: "Intellectual Property",
    body: [
      "All course materials, videos, slides, templates, written content, graphics, and branding on this website are the exclusive intellectual property of AIT Digital Solutions.",
      "You are granted a limited, non-exclusive, non-transferable licence to access course materials for your personal learning only.",
      "You may not reproduce, redistribute, resell, sublicense, broadcast, or share any course content — in whole or in part — without express written permission from AIT Digital Solutions.",
      "Recording live sessions without explicit consent from AIT Digital Solutions is strictly prohibited.",
      "User-submitted content (comments, projects, testimonials) remains your property, but you grant us a royalty-free licence to use it for educational or promotional purposes.",
    ],
  },
  {
    icon: AlertTriangle,
    number: "05",
    title: "Code of Conduct",
    body: [
      "Students and clients are expected to engage respectfully with instructors, staff, and fellow community members at all times.",
      "Harassment, discrimination, hate speech, or any form of abusive behaviour — online or in-person — will result in immediate removal without refund.",
      "You agree not to use our platforms or services for any unlawful purpose or in violation of any applicable local, national, or international laws.",
      "Sharing login credentials, course access links, or copyrighted materials with non-enrolled individuals is a material breach of these terms and may result in legal action.",
    ],
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Disclaimer & Limitation of Liability",
    body: [
      "AIT Digital Solutions provides education and digital services on an 'as is' basis. We do not guarantee specific financial outcomes, income levels, or business results from completing our courses.",
      "Earnings and results mentioned in testimonials or promotional materials are not typical and depend on individual effort, market conditions, and many other factors beyond our control.",
      "To the maximum extent permitted by law, AIT Digital Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
      "Our total liability in any matter arising from these terms shall not exceed the amount paid by you for the specific course or service giving rise to the claim.",
    ],
  },
  {
    icon: RefreshCw,
    number: "07",
    title: "Modifications & Termination",
    body: [
      "We reserve the right to modify, suspend, or discontinue any course, service, or feature at any time with reasonable notice to affected students or clients.",
      "We may terminate or suspend your access immediately, without prior notice, for conduct that we determine violates these Terms of Service or is harmful to other users or our business.",
      "Upon termination, your right to access course materials ceases immediately. Provisions of these terms that by their nature should survive termination shall remain in effect.",
    ],
  },
  {
    icon: Globe,
    number: "08",
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan.",
      "Any disputes arising from these terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts located in Gujranwala, Punjab, Pakistan.",
      "These terms constitute the entire agreement between you and AIT Digital Solutions regarding use of our services and supersede any prior agreements.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-white">

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
        <span className="section-badge mb-5 inline-flex">
          <FileText className="w-3 h-3 text-gold" /> Legal
        </span>
        <h1 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-4">
          Terms of <span className="gold-text">Service</span>
        </h1>
        <p className="text-ink-muted text-base max-w-xl mx-auto leading-relaxed">
          Please read these terms carefully before enrolling in any course or
          using AIT Digital Solutions services. They govern our relationship with you.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6">
          <span className="text-xs text-ink-soft">Last updated: August 2025</span>
          <span className="w-1 h-1 rounded-full bg-surface-300" />
          <span className="text-xs text-ink-soft">Effective: August 2025</span>
        </div>
        <div className="gold-divider mx-auto mt-6" />
      </div>

      {/* Intro box */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-14">
        <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6 text-sm text-ink-muted leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of all services
          provided by <strong className="text-ink">AIT Digital Solutions</strong>, headquartered in
          Gujranwala, Punjab, Pakistan. By using our website or services you confirm that you are at
          least 16 years of age and have read, understood, and agree to be bound by these Terms.
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div key={sec.title}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon style={{ width: 18, height: 18 }} className="text-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gold tracking-widest uppercase">{sec.number}</span>
                  <h2 className="font-heading font-bold text-ink text-lg leading-tight">{sec.title}</h2>
                </div>
              </div>
              <ul className="ml-14 space-y-2.5">
                {sec.body.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-b border-surface-100" />
            </div>
          );
        })}

        {/* Contact block */}
        <div className="bg-ink rounded-2xl p-8 text-center">
          <h3 className="font-heading font-bold text-white text-lg mb-2">Have Questions About These Terms?</h3>
          <p className="text-gray-400 text-sm mb-5">
            We&apos;re happy to clarify anything. Reach out to our team and we&apos;ll respond promptly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <a href="mailto:info@aitdigitalsolutions.com"
              className="text-gold hover:underline font-medium">
              info@aitdigitalsolutions.com
            </a>
            <span className="hidden sm:block text-gray-600">·</span>
            <a href="https://wa.me/923166768001" target="_blank" rel="noopener noreferrer"
              className="text-gold hover:underline font-medium">
              WhatsApp: 0316 6768001
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-between pt-4 pb-2 text-xs text-ink-soft">
          <span>© {new Date().getFullYear()} AIT Digital Solutions. All rights reserved.</span>
          <Link href="/privacy" className="text-gold hover:underline font-medium">
            ← Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

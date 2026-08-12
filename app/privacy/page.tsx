import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Share2, Bell, UserCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how AIT Digital Solutions collects, uses, and protects your personal information. Gujranwala, Pakistan.",
  alternates: { canonical: "https://aitdigitalsolutions.com/privacy" },
};

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    number: "01",
    body: [
      "Personal identification information including your name, email address, and phone number when you enroll in a course or request a service.",
      "Communication data when you contact us via WhatsApp (0316 6768001), email, or our website contact forms.",
      "Usage information such as pages visited, time spent, and interactions with our website to help us improve your experience.",
      "Payment information is processed through secure third-party gateways. We do not store full card or bank details on our servers.",
    ],
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    number: "02",
    body: [
      "To process your enrollment, deliver course content, and provide the digital services you have requested.",
      "To send transactional messages including enrollment confirmations, payment receipts, and course updates.",
      "To send promotional content about new courses, services, or offers — only with your explicit consent. You may opt out at any time.",
      "To improve our website, curriculum, and overall service quality based on aggregated usage insights.",
      "To comply with legal obligations and resolve any disputes that may arise.",
    ],
  },
  {
    icon: Share2,
    title: "Information Sharing",
    number: "03",
    body: [
      "We do not sell, rent, or trade your personal information to any third parties for their marketing purposes.",
      "We may share data with trusted service providers (e.g., payment processors, hosting providers) solely to operate our business — all bound by confidentiality agreements.",
      "We may disclose your information if required to do so by law, court order, or governmental authority.",
      "In the event of a business merger or acquisition, your data may be transferred as part of that transaction, with equivalent privacy protections in place.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    number: "04",
    body: [
      "We implement industry-standard technical and organizational measures — including SSL encryption, secure servers, and access controls — to protect your personal data.",
      "Access to personal information is restricted to authorised AIT staff who need it to perform their duties.",
      "While we strive to use commercially acceptable means to protect your data, no method of internet transmission is 100% secure. We cannot guarantee absolute security.",
      "In the unlikely event of a data breach affecting your rights or freedoms, we will notify you as required by applicable regulations.",
    ],
  },
  {
    icon: Bell,
    title: "WhatsApp & Communications",
    number: "05",
    body: [
      "When you message us on WhatsApp (0316 6768001), your conversation is governed by WhatsApp's own Privacy Policy in addition to ours.",
      "We use your WhatsApp number only to respond to your inquiry and provide requested services — never for unsolicited third-party marketing.",
      "Our social media pages (Facebook, Instagram, YouTube) are governed by the respective platform's privacy policies as well.",
      "You may unsubscribe from our WhatsApp broadcast lists at any time by sending 'STOP' or contacting us directly.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    number: "06",
    body: [
      "You have the right to access the personal data we hold about you and request a copy at any time.",
      "You may request correction of inaccurate or incomplete information.",
      "You may request deletion of your personal data, subject to legal and contractual obligations.",
      "You may withdraw consent for marketing communications at any time without affecting the lawfulness of prior processing.",
      "To exercise any of these rights, email us at info@aitdigitalsolutions.com and we will respond within 7 business days.",
    ],
  },
  {
    icon: Mail,
    title: "Cookies & Tracking",
    number: "07",
    body: [
      "Our website uses essential cookies required for basic functionality such as session management and security.",
      "We may use analytics tools (e.g., Google Analytics) to understand website traffic patterns. These collect anonymised, aggregated data only.",
      "You can control cookie preferences through your browser settings. Disabling cookies may affect some website features.",
      "We do not use cookies to track you across unaffiliated third-party websites.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-white">

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
        <span className="section-badge mb-5 inline-flex">
          <Shield className="w-3 h-3 text-gold" /> Legal
        </span>
        <h1 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-4">
          Privacy <span className="gold-text">Policy</span>
        </h1>
        <p className="text-ink-muted text-base max-w-xl mx-auto leading-relaxed">
          At AIT Digital Solutions, we respect your privacy and are committed to
          protecting your personal data. This policy explains how we handle it.
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
          This Privacy Policy applies to <strong className="text-ink">AIT Digital Solutions</strong> (operating at{" "}
          <strong className="text-ink">aitdigitalsolutions.com</strong>), registered and operating from Gujranwala,
          Punjab, Pakistan. By using our website or services, you agree to the collection and use of
          information described in this policy.
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div key={sec.title} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4.5 h-4.5 text-gold" style={{ width: 18, height: 18 }} />
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
          <h3 className="font-heading font-bold text-white text-lg mb-2">Questions About This Policy?</h3>
          <p className="text-gray-400 text-sm mb-5">
            If you have any questions, concerns, or requests regarding this Privacy Policy,
            please don&apos;t hesitate to contact us.
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
          <Link href="/terms" className="text-gold hover:underline font-medium">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}

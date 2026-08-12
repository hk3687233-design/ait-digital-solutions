"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";

const faqs = [
  {
    q: "Who are AIT Digital Solutions courses designed for?",
    a: "Our courses are designed for beginners, intermediate learners, and professionals who want to build income-generating skills in the digital economy. Whether you're a student, job seeker, business owner, or freelancer — we have a pathway for you.",
  },
  {
    q: "Do I need any prior experience to join?",
    a: "Most of our courses are beginner-friendly and require no prior technical knowledge. We start from the fundamentals and progressively advance to expert-level strategies. You just need a smartphone or laptop and a strong desire to learn.",
  },
  {
    q: "How are the courses delivered?",
    a: "We offer a blended learning experience — live online sessions, recorded video lectures, WhatsApp group support, and hands-on practical assignments. Our students get real-world project experience, not just theoretical knowledge.",
  },
  {
    q: "What services does AIT provide beyond training?",
    a: "Beyond training, we offer full digital services: website development, mobile app development, digital marketing campaigns, branding, YouTube and TikTok automation setup, and e-commerce store management. We build and manage your digital presence.",
  },
  {
    q: "How can I enroll in a course or get a service quote?",
    a: "Simply click the 'Get Started' button or WhatsApp us at 0316 6768001. Our team will guide you through the enrollment process, recommend the right course based on your goals, and provide a custom service quote within 24 hours.",
  },
  {
    q: "Is there any support after course completion?",
    a: "Yes! Every student gets lifetime access to our alumni community, course updates, and priority support. We believe in long-term relationships — your success is our reputation.",
  },
  {
    q: "Does AIT issue certificates upon completion?",
    a: "Yes, we issue professional certificates upon successful course completion that you can add to your CV and LinkedIn profile. Our certificates are recognized by industry partners and clients.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-soft section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <span className="section-badge mb-5 inline-flex">FAQ</span>
          <h2 className="font-heading font-black text-ink text-4xl md:text-5xl leading-tight mb-4">
            Frequently Asked<br />
            <span className="gold-text">Questions</span>
          </h2>
          <p className="text-ink-muted">
            Have more questions? WhatsApp us at <strong>0316 6768001</strong>
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </FadeUp>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
            <div
              className={`card-white overflow-hidden transition-all duration-300 ${
                open === i ? "border-gold/30 shadow-gold" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left"
              >
                <span className={`font-heading font-semibold text-sm md:text-base transition-colors ${
                  open === i ? "text-gold" : "text-ink"
                }`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  open === i
                    ? "bg-gold text-ink-light"
                    : "bg-surface-100 border border-surface-200 text-ink-soft"
                }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${
                open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}>
                <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-ink-muted text-sm leading-relaxed border-t border-surface-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

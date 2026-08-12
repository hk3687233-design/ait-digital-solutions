"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-heading font-black text-ink text-xl">Message Sent!</h3>
        <p className="text-ink-muted text-sm max-w-xs">
          Thank you! We&apos;ll get back to you within 24 hours. For faster response,
          WhatsApp us at <strong>0316 6768001</strong>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-gold text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { id: "name",  label: "Full Name",          type: "text",  placeholder: "Your full name",   required: true  },
          { id: "phone", label: "Phone / WhatsApp",   type: "tel",   placeholder: "03XX XXXXXXX",     required: false },
        ].map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wide">
              {f.label}{f.required && <span className="text-gold ml-0.5">*</span>}
            </label>
            <input
              id={f.id} name={f.id} type={f.type} placeholder={f.placeholder}
              required={f.required}
              className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-ink text-sm placeholder:text-ink-pale focus:outline-none focus:border-gold/50 focus:bg-white focus:ring-2 focus:ring-gold/10 transition-all duration-200"
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wide">Email Address</label>
        <input
          id="email" name="email" type="email" placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-ink text-sm placeholder:text-ink-pale focus:outline-none focus:border-gold/50 focus:bg-white focus:ring-2 focus:ring-gold/10 transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wide">Interested In</label>
        <select
          id="service" name="service"
          className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-ink text-sm focus:outline-none focus:border-gold/50 focus:bg-white focus:ring-2 focus:ring-gold/10 transition-all duration-200"
        >
          <option value="">Select a service or course</option>
          <option>YouTube Automation</option>
          <option>TikTok Automation</option>
          <option>E-Commerce Automation</option>
          <option>Digital Marketing</option>
          <option>Freelancing Mastery</option>
          <option>AI Tools Training</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>Branding &amp; Design</option>
          <option>Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wide">
          Your Message<span className="text-gold ml-0.5">*</span>
        </label>
        <textarea
          id="message" name="message" rows={4} required
          placeholder="Tell us about your goals, current situation, and how we can help..."
          className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-ink text-sm placeholder:text-ink-pale focus:outline-none focus:border-gold/50 focus:bg-white focus:ring-2 focus:ring-gold/10 transition-all duration-200 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full py-4 rounded-xl text-base font-bold shadow-gold disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          "Send Message — We'll Respond in 24 Hours"
        )}
      </button>

      <p className="text-center text-ink-soft text-xs">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>.
        We never share your data.
      </p>
    </form>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { adminNotificationHtml } from "@/lib/emails/adminNotification";
import { userConfirmationHtml } from "@/lib/emails/userConfirmation";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@aitdigitalsolutions.com";
const FROM_EMAIL = "AIT Digital Solutions <noreply@aitdigitalsolutions.com>";
const hasResend = !!process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Always log the submission
    console.log("📩 Contact form submission:", { name, phone, email, service, message, submittedAt });

    // Send emails only when Resend API key is configured
    if (hasResend) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const emailPromises: Promise<unknown>[] = [
        resend.emails.send({
          from: FROM_EMAIL,
          to: [ADMIN_EMAIL],
          subject: `📩 New Lead: ${name}${service ? ` — ${service}` : ""}`,
          html: adminNotificationHtml({ name, phone, email, service, message, submittedAt }),
        }),
      ];

      if (email?.trim()) {
        emailPromises.push(
          resend.emails.send({
            from: FROM_EMAIL,
            to: [email.trim()],
            subject: "✅ We received your message — AIT Digital Solutions",
            html: userConfirmationHtml({ name, service }),
          })
        );
      }

      const results = await Promise.allSettled(emailPromises);
      const allFailed = results.every(r => r.status === "rejected");

      if (allFailed) {
        console.error("All Resend emails failed:", results);
        // Still return success — submission is logged, team will follow up
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please try WhatsApp instead." }, { status: 500 });
  }
}

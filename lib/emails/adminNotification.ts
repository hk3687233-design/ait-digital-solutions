interface AdminEmailProps {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  message: string;
  submittedAt: string;
}

export function adminNotificationHtml({ name, phone, email, service, message, submittedAt }: AdminEmailProps): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111111;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <div style="display:inline-block;background:rgba(245,180,0,0.12);border:1px solid rgba(245,180,0,0.3);border-radius:100px;padding:6px 18px;margin-bottom:16px;">
              <span style="color:#F5B400;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;">New Lead</span>
            </div>
            <h1 style="color:#ffffff;font-size:24px;font-weight:900;margin:0 0 6px;letter-spacing:-0.5px;">New Contact Form Submission</h1>
            <p style="color:#6b7280;font-size:14px;margin:0;">AIT Digital Solutions Website</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <!-- Alert bar -->
            <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:28px;display:flex;align-items:center;">
              <span style="font-size:18px;margin-right:10px;">📩</span>
              <span style="color:#92400e;font-size:13px;font-weight:600;">Someone just filled out your contact form. Respond within 24 hours!</span>
            </div>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                { label: "👤 Full Name",      value: name },
                { label: "📱 Phone/WhatsApp", value: phone || "—" },
                { label: "📧 Email",          value: email || "—" },
                { label: "🎯 Interested In",  value: service || "Not specified" },
              ].map(({ label, value }) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;vertical-align:top;">
                  <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">${label}</span>
                </td>
                <td style="padding:10px 0 10px 20px;border-bottom:1px solid #f3f4f6;text-align:right;">
                  <span style="color:#111111;font-size:14px;font-weight:600;">${value}</span>
                </td>
              </tr>`).join("")}
            </table>

            <!-- Message -->
            <div style="margin-top:24px;">
              <p style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px;">💬 Message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-left:3px solid #F5B400;border-radius:8px;padding:16px 18px;">
                <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div style="margin-top:32px;text-align:center;">
              ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:100px;text-decoration:none;margin:0 6px 12px;">
                💬 Reply on WhatsApp
              </a>` : ""}
              ${email ? `<a href="mailto:${email}" style="display:inline-block;background:#111111;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:100px;text-decoration:none;margin:0 6px 12px;">
                ✉️ Send Email
              </a>` : ""}
            </div>

            <!-- Submitted at -->
            <p style="color:#9ca3af;font-size:11px;text-align:center;margin:24px 0 0;">Submitted: ${submittedAt}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#111111;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
            <p style="color:#4b5563;font-size:12px;margin:0;">
              <strong style="color:#F5B400;">AIT Digital Solutions</strong> · Gujranwala, Pakistan · <a href="https://aitdigitalsolutions.com" style="color:#F5B400;text-decoration:none;">aitdigitalsolutions.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

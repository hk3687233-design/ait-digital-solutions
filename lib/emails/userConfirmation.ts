interface UserEmailProps {
  name: string;
  service?: string;
}

export function userConfirmationHtml({ name, service }: UserEmailProps): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — AIT Digital Solutions</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111111;border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
            <!-- Logo placeholder -->
            <div style="width:64px;height:64px;background:rgba(245,180,0,0.15);border:1.5px solid rgba(245,180,0,0.35);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:28px;">✦</span>
            </div>
            <h1 style="color:#F5B400;font-size:28px;font-weight:900;margin:0 0 6px;letter-spacing:-0.5px;">AIT Digital Solutions</h1>
            <p style="color:#6b7280;font-size:13px;margin:0;letter-spacing:0.08em;text-transform:uppercase;">Training · Services · Growth</p>
          </td>
        </tr>

        <!-- Hero message -->
        <tr>
          <td style="background:#111111;padding:0 40px 36px;text-align:center;border-bottom:2px solid #F5B400;">
            <div style="background:rgba(245,180,0,0.08);border:1px solid rgba(245,180,0,0.2);border-radius:12px;padding:24px 28px;">
              <p style="color:#ffffff;font-size:22px;font-weight:800;margin:0 0 8px;">Message Received! 🎉</p>
              <p style="color:#9ca3af;font-size:14px;line-height:1.6;margin:0;">
                Shukriya <strong style="color:#F5B400;">${name}</strong>! Aap ka message mil gaya hai.<br/>
                Hum <strong style="color:#ffffff;">24 ghanton</strong> mein aap se rabta karein ge.
              </p>
            </div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
              Dear <strong>${name}</strong>,
            </p>
            <p style="color:#6b7280;font-size:14px;line-height:1.8;margin:0 0 24px;">
              Thank you for reaching out to <strong style="color:#111111;">AIT Digital Solutions</strong>. We have received your enquiry${service ? ` about <strong style="color:#111111;">${service}</strong>` : ""} and our team will get back to you within <strong style="color:#111111;">24 hours</strong>.
            </p>
            <p style="color:#6b7280;font-size:14px;line-height:1.8;margin:0 0 32px;">
              For a <strong>faster response</strong>, you can reach us directly on WhatsApp — we usually reply within minutes!
            </p>

            <!-- What to expect -->
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:32px;">
              <p style="color:#111111;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 16px;">What Happens Next?</p>
              ${[
                ["1", "#F5B400", "Our team reviews your enquiry"],
                ["2", "#F5B400", "We call or WhatsApp you within 24 hrs"],
                ["3", "#F5B400", "We suggest the best course or service for you"],
                ["4", "#F5B400", "You start your digital journey with AIT! 🚀"],
              ].map(([num, color, text]) => `
              <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
                <div style="min-width:28px;height:28px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;">
                  <span style="color:#111111;font-size:12px;font-weight:800;">${num}</span>
                </div>
                <p style="color:#374151;font-size:14px;line-height:1.6;margin:4px 0 0;">${text}</p>
              </div>`).join("")}
            </div>

            <!-- Stats -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                ${[
                  ["25,000+", "Students Trained"],
                  ["9+", "Digital Services"],
                  ["4.9★", "Student Rating"],
                ].map(([val, label]) => `
                <td style="text-align:center;padding:16px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;margin:0 4px;" width="33%">
                  <div style="color:#111111;font-size:20px;font-weight:900;">${val}</div>
                  <div style="color:#92400e;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;margin-top:2px;">${label}</div>
                </td>`).join('<td width="8px"></td>')}
              </tr>
            </table>

            <!-- WhatsApp CTA -->
            <div style="text-align:center;margin-bottom:28px;">
              <a href="https://wa.me/923166768001?text=Hi%20AIT!%20I%20just%20submitted%20the%20contact%20form%20and%20wanted%20to%20follow%20up."
                style="display:inline-block;background:#25D366;color:#ffffff;font-size:15px;font-weight:700;padding:16px 36px;border-radius:100px;text-decoration:none;">
                💬 Chat on WhatsApp Now
              </a>
              <p style="color:#9ca3af;font-size:12px;margin:12px 0 0;">Or call us: <a href="tel:+923166768001" style="color:#F5B400;text-decoration:none;font-weight:600;">0316 6768001</a></p>
            </div>

            <!-- Explore links -->
            <div style="border-top:1px solid #f3f4f6;padding-top:24px;text-align:center;">
              <p style="color:#6b7280;font-size:12px;margin:0 0 14px;">While you wait, explore:</p>
              <div>
                <a href="https://aitdigitalsolutions.com/courses" style="display:inline-block;background:#f9fafb;border:1px solid #e5e7eb;color:#374151;font-size:12px;font-weight:600;padding:8px 16px;border-radius:100px;text-decoration:none;margin:4px;">📚 Our Courses</a>
                <a href="https://aitdigitalsolutions.com/services" style="display:inline-block;background:#f9fafb;border:1px solid #e5e7eb;color:#374151;font-size:12px;font-weight:600;padding:8px 16px;border-radius:100px;text-decoration:none;margin:4px;">⚡ Our Services</a>
                <a href="https://aitdigitalsolutions.com/free-resources" style="display:inline-block;background:#f9fafb;border:1px solid #e5e7eb;color:#374151;font-size:12px;font-weight:600;padding:8px 16px;border-radius:100px;text-decoration:none;margin:4px;">🎁 Free Resources</a>
              </div>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#111111;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="color:#F5B400;font-size:14px;font-weight:700;margin:0 0 6px;">AIT Digital Solutions</p>
            <p style="color:#4b5563;font-size:12px;margin:0 0 12px;">Gujranwala, Punjab, Pakistan</p>
            <p style="color:#374151;font-size:11px;margin:0;">
              <a href="https://aitdigitalsolutions.com" style="color:#6b7280;text-decoration:none;">aitdigitalsolutions.com</a>
              &nbsp;·&nbsp;
              <a href="https://aitdigitalsolutions.com/privacy" style="color:#6b7280;text-decoration:none;">Privacy Policy</a>
              &nbsp;·&nbsp;
              <a href="https://aitdigitalsolutions.com/terms" style="color:#6b7280;text-decoration:none;">Terms of Service</a>
            </p>
            <p style="color:#374151;font-size:10px;margin:12px 0 0;">You received this email because you submitted the contact form on our website. We will never spam you.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

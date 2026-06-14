import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body || {};

    // Honeypot (spam bots fill it)
    if (website) {
      return Response.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to   = process.env.CONTACT_TO || user;

    if (!user || !pass || !to) {
      return Response.json(
        { ok: false, error: "Server email is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const emailSubject = subject
      ? `Portfolio Contact [${subject}]: ${name}`
      : `Portfolio Contact: ${name}`;

    await transporter.sendMail({
      from:    `"${name}" <${user}>`,
      replyTo: email,
      to,
      subject: emailSubject,
      text:    `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui; max-width: 600px; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-bottom: 16px;" />

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "N/A")}</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />

          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #f97316;">
            ${escapeHtml(message).replace(/\n/g, "<br/>")}
          </p>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return Response.json({ ok: true }, { status: 200 });

  } catch (err: any) {
    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}

// Basic escape to avoid HTML injection
function escapeHtml(str: string) {
  return str
    .replaceAll("&",  "&amp;")
    .replaceAll("<",  "&lt;")
    .replaceAll(">",  "&gt;")
    .replaceAll('"',  "&quot;")
    .replaceAll("'",  "&#039;");
}

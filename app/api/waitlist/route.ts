import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: unknown): email is string {
  return (
    typeof email === "string" &&
    email.trim().length > 0 &&
    email.includes("@")
  );
}

function ownerNotificationHtml(email: string, timestamp: string): string {
  const safeEmail = escapeHtml(email);
  const safeTimestamp = escapeHtml(timestamp);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <body style="margin:0;padding:32px;background:#f5f5f5;font-family:Inter,Arial,sans-serif;color:#111111;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e5e5;">
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#cc0000;font-weight:700;">RoadCase Waitlist</p>
              <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;">New signup</h1>
              <p style="margin:0;font-size:16px;line-height:1.6;color:#333333;">
                <strong>${safeEmail}</strong><br />
                ${safeTimestamp}
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email;

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const trimmedEmail = email.trim();
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "RoadCase <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY || !notificationEmail) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const timestamp = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    }).format(new Date());

    const ownerResult = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      subject: "🚨 New RoadCase Waitlist Signup",
      html: ownerNotificationHtml(trimmedEmail, `${timestamp} UTC`),
    });

    if (ownerResult.error) {
      console.error("Resend error:", ownerResult.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
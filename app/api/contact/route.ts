import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message, token } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nedostaju podaci" }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json(
      { error: "Captcha token nedostaje" },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Neispravan email" }, { status: 400 });
  }

  const captchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );

  const captchaData = await captchaRes.json();

  if (!captchaData.success || captchaData.score < 0.5) {
    return NextResponse.json(
      { error: "Captcha verifikacija nije prošla" },
      { status: 403 },
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.MAIL_NAME!,
      subject: `Nova poruka – ${name}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, captchaData }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Email nije poslat" }, { status: 500 });
  }


}

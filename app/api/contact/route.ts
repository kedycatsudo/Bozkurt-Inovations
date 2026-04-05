import { error } from "console";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, phoneNumber, emailAdress, Location, message } = await req.json();
  // Configure your SMTP transport (this one is for Gmail; see below for other providers)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_APP_PASSWORD,
    },
  });
  const mailOptions = {
    from: `"${fullName}" <${emailAdress}>`, //sender
    to: process.env.CONTACT_EMAIL,
    subject: ` Contact Form Submission from ${fullName}`,
    text: message,
    html: `<p><b>Name:</b> ${name}<br/><b>Email:</b> ${emailAdress}<br/><b>Message:</b><br/>${message}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error", err);
    return NextResponse.json({ success: false, error: "Could not send email" }, { status: 500 });
  }
}

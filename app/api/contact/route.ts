import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, phoneNumber, emailAddress, location, message } = await req.json();
  // Configure your SMTP transport (this one is for Gmail; see below for other providers)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_APP_PASSWORD,
    },
  });
  const mailOptions = {
    from: `"${fullName}" <${emailAddress}>`, // sender
    to: process.env.CONTACT_EMAIL, // your receiving address
    subject: `Contact Form Submission from ${fullName}`,
    text: `
Name: ${fullName}
Email: ${emailAddress}
Phone: ${phoneNumber}
Location: ${location}
Message: 
${message}
    `.trim(),
    html: `
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${emailAddress}</p>
      <p><b>Phone:</b> ${phoneNumber}</p>
      <p><b>Location:</b> ${location}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    `.trim(),
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error", err);
    return NextResponse.json({ success: false, error: "Could not send email" }, { status: 500 });
  }
}

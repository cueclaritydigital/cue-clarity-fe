// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your secret key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Grab the data sent from your frontend form
    const body = await req.json();
    const { name, email, phone, role, message } = body;

    // 2. Send the email via Resend
    const data = await resend.emails.send({
      from: "CueClarity Website <onboarding@resend.dev>", // Testing email provided by Resend
      to: ["cueclarity.digital@gmail.com"], // Your client's email goes here
      replyTo: email, // Allows the client to hit "reply" directly to the user
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Role:</strong> ${role || "—"}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    // 3. Return success to the frontend
    return NextResponse.json({ success: true, data });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
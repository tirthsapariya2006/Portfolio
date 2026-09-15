import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    // Clean logging / service abstraction point
    // An email provider (such as Resend, SendGrid, or Nodemailer) can easily be connected here:
    // e.g.: await resend.emails.send({ from: '...', to: 'tirthsapariya07@gmail.com', subject: '...', ... })
    console.log("[Contact Form Submission Received]", {
      name: name.trim(),
      email: email.trim(),
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. I will get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or email directly." },
      { status: 500 }
    );
  }
}

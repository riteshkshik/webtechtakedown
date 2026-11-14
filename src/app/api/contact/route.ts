import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, piracyUrl, organization } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid professional email address." },
        { status: 400 }
      );
    }

    // In production, this would dispatch via Resend/SendGrid/SMTP to contact@webtechtakedown.com
    console.log("New Takedown Inquiry / Piracy Report Received:", {
      name,
      organization: organization || "Not specified",
      email,
      service: service || "General",
      piracyUrl: piracyUrl || "None provided",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our enforcement team will review the details and respond within 12–24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out directly to contact@webtechtakedown.com." },
      { status: 500 }
    );
  }
}


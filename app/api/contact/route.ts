// app/api/contact/route.ts

import { NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, message, "h-captcha-response": hCaptchaToken } = body;

    // Basic validation
    if (!name || !email || !message || !hCaptchaToken) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Verify hCaptcha Token
    const isCaptchaValid = await verifyHCaptcha(hCaptchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { success: false, message: "hCaptcha verification failed." },
        { status: 400 }
      );
    }

    // Prepare payload for Web3Forms
    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            result.message || "Something went wrong. Please try again later.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error submitting to Web3Forms:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "There was an error submitting your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Function to verify hCaptcha token
async function verifyHCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("hCaptcha secret key is missing.");
    return false;
  }

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    const data = await response.json();
    console.log("hCaptcha verification response:", data);
    return data.success;
  } catch (error) {
    console.error("Error verifying hCaptcha:", error);
    return false;
  }
}

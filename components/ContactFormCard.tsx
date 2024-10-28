// components/ContactFormCard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

export function ContactFormCard() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    "h-captcha-response": "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const captchaRef = useRef<HTMLDivElement>(null);
  const captchaInitialized = useRef(false);

  useEffect(() => {
    if (document.querySelector('script[src="https://hcaptcha.com/1/api.js"]')) {
      renderHCaptcha();
    } else {
      const script = document.createElement("script");
      script.src = "https://hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => renderHCaptcha();
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const renderHCaptcha = () => {
    if (!captchaInitialized.current && window.hcaptcha && captchaRef.current) {
      window.hcaptcha.render(captchaRef.current, {
        sitekey: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!,
        callback: onHCaptchaVerify,
        "error-callback": onHCaptchaError,
        "expired-callback": onHCaptchaExpired,
      });
      captchaInitialized.current = true;
    }
  };

  const onHCaptchaVerify = (token: string) => {
    setFormData((prev) => ({
      ...prev,
      "h-captcha-response": token,
    }));
  };

  const onHCaptchaError = () => {
    setStatus({
      loading: false,
      success: false,
      message: "hCaptcha encountered an error. Please try again.",
    });
  };

  const onHCaptchaExpired = () => {
    setFormData((prev) => ({
      ...prev,
      "h-captcha-response": "",
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        loading: false,
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (!formData["h-captcha-response"]) {
      setStatus({
        loading: false,
        success: false,
        message: "Please complete the hCaptcha verification.",
      });
      return;
    }

    setStatus({
      loading: true,
      success: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          message: result.message,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          "h-captcha-response": "",
        });
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
      } else {
        throw new Error(result.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setStatus({
        loading: false,
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });

      if (window.hcaptcha) {
        window.hcaptcha.reset();
      }
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Contact Me
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-white p-2"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-white p-2"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-white p-2"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          {/* hCaptcha */}
          <div ref={captchaRef} className="h-captcha"></div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                status.loading
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status.success !== null && (
          <div
            className={`mt-4 p-4 rounded-md text-sm ${
              status.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

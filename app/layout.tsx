import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-manrope", // Use a CSS variable for the font
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // The title of your website
  title: "Georgescu Mihnea's Personal Portofolio",
  // A brief description of your website for SEO purposes
  description: "A brief description of your website for SEO purposes.",
  // Keywords relevant to your website content
  keywords: ["web developer", "portfolio", "javascript", "react", "next.js"],
  // The name and URL of the website author
  authors: [{ name: "Georgescu Mihnea", url: "https://yourwebsite.com" }],
  // The name of the creator (you)
  creator: "Georgescu Mihnea",
  // Open Graph meta tags for social media sharing
  openGraph: {
    title: "Your Website Title",
    description: "A brief description of your website for SEO purposes.",
    url: "https://yourwebsite.com", // Replace with your website's URL
    siteName: "Your Website Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "An illustrative image representing your website",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card meta tags for Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Your Website Title",
    description: "A brief description of your website for SEO purposes.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with your Twitter card image URL
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  // Meta tags for search engine robots
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // The canonical URL of your website
  alternates: {
    canonical: "https://yourwebsite.com",
    languages: {
      "en-US": "https://yourwebsite.com/en-US",
      // Add other languages if your site is multilingual
    },
  },
  // Links to your favicon and other icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
  // The URL to your site's manifest file
  manifest: "/site.webmanifest",
  // The theme color for your website
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${manrope.variable}`}>{children}</body>
    </html>
  );
}

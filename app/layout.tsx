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
  title: "Georgescu Mihnea | Web Developer Portfolio",
  // A brief description of your website for SEO purposes
  description:
    "I'm Georgescu Mihnea, a passionate web developer creating websites that convert visitors into customers. Explore my portfolio of Next.js, Node.js, and React projects.",
  // Keywords relevant to your website content
  keywords: [
    "Georgescu Mihnea",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "TailwindCSS",
    "sales-focused websites",
  ],
  // The name and URL of the website author
  authors: [
    {
      name: "Georgescu Mihnea",
      url: "https://my-portofolio-georgescumihneas-projects.vercel.app",
    },
  ],
  // The name of the creator (you)
  creator: "Georgescu Mihnea",
  // Open Graph meta tags for social media sharing
  openGraph: {
    title: "Georgescu Mihnea | Web Developer Portfolio",
    description:
      "Explore the work of Georgescu Mihnea, a web developer creating effective, sales-driven websites. Check out projects in Next.js, Node.js, and more.",
    url: "https://my-portofolio-georgescumihneas-projects.vercel.app",
    siteName: "Georgescu Mihnea Portfolio",
    locale: "en_US",
    type: "website",
  },
  // Twitter Card meta tags for Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Georgescu Mihnea | Web Developer Portfolio",
    description:
      "I'm Georgescu Mihnea, a web developer specializing in creating websites that convert. View my portfolio of projects in Next.js, React, and Node.js.",
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
    canonical: "https://my-portofolio-georgescumihneas-projects.vercel.app",
    languages: {
      "en-US":
        "https://my-portofolio-georgescumihneas-projects.vercel.app/en-US",
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

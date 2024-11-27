"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
export function PortfolioProjectsCard() {
  const projects = [
    {
      title: "Proxy Landing Page",
      githubLink: "https://github.com/georgescumihnea/proxy-landing",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
      description:
        "Designed and developed a robust web platform using Next.js, enabling users to purchase and manage API access efficiently. The application features a dynamic, SEO-friendly landing page and a secure user dashboard accessible through unique tokens. Users can seamlessly view and manage their API keys, ensuring smooth integration and a user-friendly experience.",
    },
    {
      title: "Game Landing Page [COMING SOON]",
      githubLink: "",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      description:
        "A landing page for a indie game, featuring a dynamic and responsive design, and a seamless user experience. Made for converting traffic to steam wishlists.",
    },
    {
      title: "Linktree clone with Supabase [WIP]",
      githubLink: "https://github.com/georgescumihnea/nextjs-with-supabase",
      techStack: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
      description:
        "A clone of Linktree, featuring a dynamic and responsive design, and a seamless user experience.With Supabase for authentication and database management. Users can create, edit, and delete their links, and view their linktree page. It also has web analytics to track the performance of each link.",
    },
    {
      title: "Freejack Namechanger 'hack'",
      githubLink: "https://github.com/georgescumihnea/fjnamechangeapp",
      techStack: ["React", "Vite", "TailwindCSS", "TypeScript"],
      description: `This project replicates parts of the Freejack login system and demonstrates how its networking logic was functioning during its beta phase. While playing the game, I identified certain vulnerabilities in their use of a third-party API. This exploration revealed issues with unprotected endpoints that could be exploited to change usernames or access game-related data such as an exploit in their verification system to access "patreon keys" during beta.`,
    },
    {
      title: "Coinbase Login Page Clone [WIP]",
      githubLink: "https://github.com/georgescumihnea/coinbaseuiclone",
      techStack: ["Next.js", "TailwindCSS", "TypeScript"],
      description:
        "A clone of the Coinbase login page really far from being done.",
    },
  ];

  return (
    <div>
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold">Portfolio & Projects</h2>
      </CardHeader>
      <CardContent>
        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <Link
              href={project.githubLink}
              className="text-red-500 hover:underline flex items-center gap-2 text-sm font-semibold"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </CardContent>
    </div>
  );
}

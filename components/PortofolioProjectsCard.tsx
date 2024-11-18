"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function PortfolioProjectsCard() {
  const projects = [
    {
      title: "ProxyGate Landing Page",
      image: "/images/ecommerce-platform.jpg",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
      description:
        "Designed and developed a robust web platform using Next.js, enabling users to purchase and manage API access efficiently. The application features a dynamic, SEO-friendly landing page and a secure user dashboard accessible through unique tokens. Users can seamlessly view and manage their API keys, ensuring smooth integration and a user-friendly experience.",
    },
    {
      title: "Game Landing Page",
      image: "/images/landing-page-builder.jpg",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      description:
        "A landing page for a indie game, featuring a dynamic and responsive design, and a seamless user experience.",
    },
    {
      title: "Linktree Clone",
      image: "/images/project-management.jpg",
      techStack: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
      description:
        "A clone of Linktree, featuring a dynamic and responsive design, and a seamless user experience.With Supabase for authentication and database management. Users can create, edit, and delete their links, and view their linktree page. It also has web analytics to track the performance of each link.",
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
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
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

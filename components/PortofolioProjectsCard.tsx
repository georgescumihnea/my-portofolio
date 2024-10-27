"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function PortfolioProjectsCard() {
  const projects = [
    {
      title: "E-commerce Platform",
      image: "/images/ecommerce-platform.jpg",
      techStack: ["React", "Next.js", "Shopify API"],
      description:
        "A fully customized e-commerce solution for a retail brand, integrated with Shopify and optimized for high conversion rates.",
    },
    {
      title: "Landing Page Builder",
      image: "/images/landing-page-builder.jpg",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      description:
        "A drag-and-drop builder for creating optimized landing pages, complete with custom templates and payment integration.",
    },
    {
      title: "Project Management Tool",
      image: "/images/project-management.jpg",
      techStack: ["React", "Node.js", "MongoDB"],
      description:
        "A collaborative project management tool featuring real-time task updates and team communication channels.",
    },
  ];

  return (
    <div>
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold">Portfolio & Projects</h2>
        <ExternalLink className="h-4 w-4" />
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

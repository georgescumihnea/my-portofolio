"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsDown, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WelcomeCard() {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Text Content */}
      <CardContent className="p-4 sm:p-6 flex-1">
        <div className="space-y-4">
          <h2 className="text-sm text-muted-foreground">welcome</h2>
          <h1 className="text-xl sm:text-2xl font-normal leading-tight text-justify">
            Hi, I'm <span className="font-bold">Georgescu Mihnea</span>, a web
            developer with a strong passion for creating websites that not only
            look great but also drive real sales. My love for sales and
            marketing helps me craft digital experiences that convert visitors
            into customers. I enjoy solving business problems with smart,
            user-friendly web solutions, and I'm always excited to explore new
            technologies that can enhance online success.
          </h1>
        </div>
      </CardContent>

      {/* Icons and Image at the Bottom */}
      <CardFooter className="flex justify-between items-end p-4 sm:p-6">
        {/* Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/georgescu-mihnea-066885206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-red-500 hover:bg-red-600"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </Button>
          </Link>
          <Link href="mailto:mihtitan@gmail.com">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-red-500 hover:bg-red-600"
            >
              <Mail className="h-4 w-4 text-white" />
            </Button>
          </Link>
        </div>

        {/* Image with Hover Effect */}
        <div className="relative group w-32 h-32 mt-12 sm:w-40 sm:h-40 md:mt-0 ">
          <Image
            width={300}
            height={300}
            src="/me.png"
            alt="3D avatar"
            className="w-full h-full object-cover"
          />
          {/* Chat Bubble */}
          <div className="absolute -top-12 right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="bg-gray-800 text-white text-sm rounded-lg p-2 relative">
              Yeah, I'm looking directly at you.
              <div className="absolute -bottom-2 right-2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
            </div>
          </div>
        </div>
      </CardFooter>
    </div>
  );
}

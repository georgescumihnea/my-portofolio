// components/QuoteCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export function QuoteCard() {
  return (
    <CardContent className="p-6 sm:p-8 flex items-center justify-center h-full relative z-10">
      {/* Rainbow Wave Shapes */}
      {/* Top-Left Wave */}
      <div
        className="
            absolute
            top-[-150px]
            left-[-150px]
            w-[500px] h-[500px]
            rounded-full
            animate-rotate
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-20
            opacity-0
            blur-[20px]
            pointer-events-none
            z-10
            bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
            transform
            -scale-x-100
          "
        aria-hidden="true"
      ></div>

      {/* Bottom-Right Wave */}
      <div
        className="
            absolute
            bottom-[-150px]
            right-[-150px]
            w-[500px] h-[500px]
            rounded-full
            animate-rotate-slow
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-20
            opacity-0
            blur-[20px]
            pointer-events-none
            z-20
            bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
            transform
            rotate-180
            -scale-x-100
          "
        aria-hidden="true"
      ></div>

      {/* Top-Right Wave */}
      <div
        className="
            absolute
            top-[100px]
            right-[-150px]
            w-[500px] h-[500px]
            rounded-full
            animate-rotate-fast
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-15
            opacity-0
            blur-[20px]
            pointer-events-none
            z-30
            bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500
            transform
            rotate-90
          "
        aria-hidden="true"
      ></div>

      {/* Bottom-Left Wave */}
      <div
        className="
            absolute
            bottom-[100px]
            left-[-150px]
            w-[500px] h-[500px]
            rounded-full
            animate-rotate
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-15
            opacity-0
            blur-[20px]
            pointer-events-none
            z-10
            bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500
            transform
            -rotate-90
          "
        aria-hidden="true"
      ></div>

      {/* Top-Center Wave */}
      <div
        className="
            absolute
            top-[-200px]
            left-1/2
            transform -translate-x-1/2
            w-[600px] h-[600px]
            rounded-full
            animate-rotate
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-25
            opacity-0
            blur-[25px]
            pointer-events-none
            z-5
            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
          "
        aria-hidden="true"
      ></div>

      {/* Bottom-Center Wave */}
      <div
        className="
            absolute
            bottom-[-200px]
            left-1/2
            transform -translate-x-1/2
            w-[600px] h-[600px]
            rounded-full
            animate-rotate-slow
            transition-opacity duration-1000 ease-in-out
            group-hover:opacity-10
            opacity-0
            blur-[25px]
            pointer-events-none
            z-25
            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
            rotate-180
          "
        aria-hidden="true"
      ></div>

      {/* Quote Content */}
      <blockquote className="relative z-40 text-center italic text-black bg-transparent hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 group-hover:animate-rainbowGradient px-4 sm:px-6 md:px-8 text-lg sm:text-xl md:text-2xl dark:text-white dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r ">
        "Anything one man can imagine, other men can make real."
        <footer className="text-sm sm:text-base text-muted-foreground mt-2">
          - Jules Verne
        </footer>
      </blockquote>
    </CardContent>
  );
}

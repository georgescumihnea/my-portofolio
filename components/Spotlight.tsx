"use client";

import React, { useRef, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  }, [mousePosition]);

  return (
    <div
      ref={cardRef}
      className={`relative h-full rounded-3xl p-px overflow-hidden group ${className}`}
    >
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-[inherit] z-20 overflow-hidden">
        {children}
      </div>
      {/* Stronger red Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 -left-48 -top-48 bg-red-600 rounded-full opacity-0 transition-opacity duration-500 blur-[120px] group-hover:opacity-100"
          style={{
            transform: `translate(calc(var(--mouse-x) - 50%), calc(var(--mouse-y) - 50%))`,
          }}
        ></div>
        <div
          className="absolute w-[30rem] h-[30rem] -left-60 -top-60 bg-red-500 rounded-full opacity-0 transition-opacity duration-500 blur-[150px] group-hover:opacity-80"
          style={{
            transform: `translate(calc(var(--mouse-x) - 50%), calc(var(--mouse-y) - 50%))`,
          }}
        ></div>
      </div>
    </div>
  );
}

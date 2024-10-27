"use client";

import { CardHeader, CardContent } from "@/components/ui/card";

export function NowCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold">Now</h2>
        <div className="relative">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </CardHeader>
      <CardContent className="text-left">
        <p>Currently working as a freelancer.</p>
        <p>Just finished college.</p>
        <p className="animate-pulse duration-4000 font-semibold text-sm">
          Looking for opportunities.👀
        </p>
      </CardContent>
    </>
  );
}

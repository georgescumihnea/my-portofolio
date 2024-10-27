"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ExperienceCard() {
  return (
    <>
      <CardHeader>
        <h2 className="text-xl font-bold">Studies</h2>
      </CardHeader>
      <CardContent className="space-y-4 w-full text-left">
        <div>
          <h3 className="font-semibold">Romanian American University</h3>
          <p className="text-red-500">
            Bachelor's in Computer Science & Business
          </p>
          <p className="text-sm text-muted-foreground">2021 - 2024</p>
        </div>
        <div>
          <h3 className="font-semibold">Romanian American University</h3>
          <p className="text-red-500">Masters Program</p>
          <p className="text-sm text-muted-foreground">I will start in 2025.</p>
        </div>
      </CardContent>
    </>
  );
}

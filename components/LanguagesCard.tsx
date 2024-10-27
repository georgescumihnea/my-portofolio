"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LanguagesCard() {
  return (
    <>
      <CardHeader>
        <h2 className="text-xl font-bold">Programming Languages</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            JavaScript
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            Python
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            Typescript
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            Visual Basic
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            C#
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            HTML
          </Button>
          <Button
            variant="secondary"
            className="rounded-full pointer-events-none dark:bg-gray-700"
          >
            CSS
          </Button>
        </div>
      </CardContent>
    </>
  );
}

"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CvCard() {
  return (
    <>
      <CardHeader>
        <h2 className="text-xl font-bold">CV</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          View and download my resume by clicking on the button below.
        </p>
      </CardContent>
      <div className="px-6">
        <a href="/resume.pdf" download className="w-full">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-sm text-pretty">
            Download Resume <Download className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </>
  );
}

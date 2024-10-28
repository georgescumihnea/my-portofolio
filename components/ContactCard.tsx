"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function ContactCard() {
  return (
    <div className="rounded-3xl">
      <CardHeader>
        <h2 className="text-xl font-bold">Let's start working together!</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Contact Details</h3>
          <p>mihtitan@gmail.com</p>
          <p>Bucharest, Romania</p>
        </div>
        <div>
          <h3 className="font-semibold">Find me on</h3>
          <ul className="space-y-1 flex flex-col">
            <Link
              href="https://www.linkedin.com/in/georgescu-mihnea-066885206/"
              className="hover:text-red-500 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/georgescumihnea"
              className="hover:text-red-500 hover:underline"
            >
              GitHub
            </Link>
          </ul>
        </div>
      </CardContent>
    </div>
  );
}

"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function ContactCard() {
  return (
    <div className="rounded-3xl">
      <CardHeader>
        <h2 className="text-xl font-bold">Let's start working together!</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Contact Details</h3>
          <p>camiloplaza3@gmail.com</p>
          <p>Bogotá D.C, Colombia</p>
        </div>
        <div>
          <h3 className="font-semibold">Socials</h3>
          <ul className="space-y-1">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Instagram</li>
          </ul>
        </div>
      </CardContent>
    </div>
  );
}

"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function AboutMeCard() {
  return (
    <>
      <CardHeader>
        <h2 className="text-xl font-bold">About me</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>While being a web developer, I enjoy learning new technologies.</p>
        <div>
          <h3 className="font-semibold mb-2">
            My primary frameworks and tools of choice include:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Next.js</li>
            <li>Node.js</li>
            <li>React</li>
            <li>SQLite</li>
            <li>TailwindCSS</li>
            <li>NextAuth.js</li>
            <li>Flask</li>
            <li>Vite</li>
            <li>Postman</li>
          </ul>
        </div>
        <p>
          Beyond coding, I'm passionate about gaming, and music.I sometimes try
          to DJ, but only in my bedroom, I also enjoy traveling, but who
          doesn't?
        </p>
      </CardContent>
    </>
  );
}

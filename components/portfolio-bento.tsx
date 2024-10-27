"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ThumbsDown,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
} from "lucide-react";

export function PortfolioBentoComponent() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold font-mono">Hey there 👋</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">GitHub</Button>
            <Button
              variant="ghost"
              className="bg-gray-200 rounded-full w-8 h-8 p-0"
            >
              <span className="sr-only">Toggle theme</span>
              🌙
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Welcome Card */}
          <Card className="md:col-span-2 rounded-3xl overflow-hidden">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                <div className="space-y-4 w-full sm:w-1/2">
                  <h2 className="text-sm text-muted-foreground">welcome</h2>
                  <h1 className="text-xl sm:text-2xl font-normal leading-tight">
                    Hi, I'm <span className="font-bold">Georgescu Mihnea</span>,
                    a web developer with a strong passion for creating websites
                    that not only look great but also drive real sales. My love
                    for sales and marketing helps me craft digital experiences
                    that convert visitors into customers. I enjoy solving
                    business problems with smart, user-friendly web solutions,
                    and I'm always excited to explore new technologies that can
                    enhance online success.
                  </h1>
                </div>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="3D avatar"
                  className="w-full sm:w-1/2 h-auto object-cover max-w-[300px] sm:max-w-none"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center sm:justify-start p-4 sm:p-6">
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  <ThumbsDown className="h-4 w-4 text-white" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  <Mail className="h-4 w-4 text-white" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* About Me Card */}
          <Card className="rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">About me</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Hi, I'm Andrés, a fullstack software developer from Colombia co.
              </p>
              <div>
                <h3 className="font-semibold mb-2">
                  My primary tools of choice includes:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Astro</li>
                  <li>Python</li>
                  <li>Php</li>
                  <li>Mongo</li>
                  <li>SQL</li>
                  <li>Nodejs</li>
                </ul>
              </div>
              <p>
                Beyond coding, I'm passionate about tattoo, soccer and
                traveling. An unusual hobby of mine is play classical music in
                the guitar or ukulele.
              </p>
            </CardContent>
          </Card>

          {/* CV Card */}
          <Card className="rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">CV</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src="/placeholder.svg?height=150&width=300"
                alt="Resume preview"
                className="w-full object-cover rounded"
              />
              <p className="text-sm text-muted-foreground">
                View and download my resume by clicking on the button below
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Download resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Now Card */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold">Now</h2>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animate-bounce"></div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">what's that ?</p>
              <p>Currently working as freelancer</p>
            </CardContent>
          </Card>

          {/* Portfolio & Projects Card */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold">Portfolio & Projects</h2>
              <ExternalLink className="h-4 w-4" />
            </CardHeader>
            <CardContent>{/* Add portfolio content here */}</CardContent>
          </Card>

          {/* Time zone Card */}
          <Card className="md:col-span-2 rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">Time zone</h2>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-semibold">
                Friday, 25 October 2024 a 3:41:55 PM
              </p>
              <p className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                co Bogotá D.C, Colombia co
              </p>
            </CardContent>
          </Card>

          {/* Let's start working together Card */}
          <Card className="rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">
                Let's start working together!
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Contact Details</h3>
                <p>camiloplaza3@gmail.com</p>
                <p>co Bogotá D.C, Colombia co</p>
              </div>
              <div>
                <h3 className="font-semibold">Socials</h3>
                <ul className="space-y-1">
                  <li>LinkedIn</li>
                  <li>Github</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">Experience</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-orange-500">Straico</p>
                <p className="text-sm text-muted-foreground">2021 - Current</p>
              </div>
              <div>
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-orange-500">Spot2</p>
                <p className="text-sm text-muted-foreground">2021 - Current</p>
              </div>
              <div>
                <h3 className="font-semibold">Frontend developer</h3>
                <p className="text-orange-500">Imaginamos</p>
                <p className="text-sm text-muted-foreground">2021 - 2021</p>
              </div>
              <Button variant="link" className="text-orange-500 p-0">
                View More
              </Button>
            </CardContent>
          </Card>

          {/* Quote Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6 flex items-center justify-center h-full">
              <blockquote className="text-center italic">
                "Anything one man can imagine, other men can make real."
                <footer className="text-sm text-muted-foreground mt-2">
                  - Jules Verne
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          {/* Study Card */}
          <Card className="rounded-3xl">
            <CardHeader>
              <h2 className="text-xl font-bold">Study</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" className="rounded-full">
                  Universidad Central
                </Button>
                <Button variant="secondary" className="rounded-full">
                  Platzi
                </Button>
                <Button variant="secondary" className="rounded-full">
                  Udemy
                </Button>
                <Button variant="secondary" className="rounded-full">
                  Youtube
                </Button>
                <Button variant="secondary" className="rounded-full">
                  Tattoo Academy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Instagram tattoo Card */}
          <Card className="rounded-3xl col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold">Instagram tattoo</h2>
              <ExternalLink className="h-4 w-4" />
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Tattoo artist avatar"
                className="w-full h-48 object-cover rounded"
              />
              <p className="text-sm">
                If you want to see my tattoo's, you can follow me on Instagram.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

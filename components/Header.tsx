// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  // State to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to set the initial theme based on localStorage or system preference
  useEffect(() => {
    // Check for saved user preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If no preference, use system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="flex justify-between items-center mb-8">
      {/* Your Name as Navbar Item */}
      <h1 className="text-2xl font-bold font-mono">
        <Link href="/" className="hover:text-blue-500 transition-colors">
          Georgescu Mihnea
        </Link>
      </h1>

      {/* Navigation Links and Dark Mode Toggle */}
      <nav className="flex items-center space-x-4">
        {/* GitHub Link */}
        <a
          href="https://github.com/georgescumihnea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>GitHub</Button>
        </a>

        {/* Dark Mode Toggle Button */}
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 rounded-full w-8 h-8 p-0 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          {/* Display Sun or Moon based on the current theme */}
          {isDarkMode ? "☀️" : "🌙"}
        </Button>
      </nav>
    </header>
  );
}

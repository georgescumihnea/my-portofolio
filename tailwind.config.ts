// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"], // Enables dark mode via class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom Keyframes for Wave Rotation
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // Keyframes for Text Gradient Animation
        rainbowGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      // Custom Animations Using the Keyframes
      animation: {
        rotate: "rotate 30s linear infinite",
        "rotate-slow": "rotate 32s linear infinite",
        "rotate-fast": "rotate 25s linear infinite",
        rainbowGradient: "rainbowGradient 10s ease infinite",
      },
      // Custom Font Family
      fontFamily: {
        sans: ["var(--font-manrope)", ...fontFamily.sans],
      },
      // Custom Colors
      colors: {
        "wave-bg-red": "#ff0000",
        "wave-bg-orange": "#ff7f00",
        "wave-bg-yellow": "#ffff00",
        "wave-bg-green": "#00ff00",
        "wave-bg-blue": "#0000ff",
        "wave-bg-indigo": "#4b0082",
        "wave-bg-purple": "#8f00ff",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      // Custom Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Extend Opacity Scale
      opacity: {
        10: "0.10",
        15: "0.15",
        20: "0.20",
        25: "0.25",
      },
      // Background Size for Gradient Animation
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"], // Enables group-hover for opacity
    },
  },
  plugins: [require("tailwindcss-animate")], // Ensure tailwindcss-animate is installed
};

module.exports = config;

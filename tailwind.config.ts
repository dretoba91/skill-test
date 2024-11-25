import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-orange-500",
    // Add other dynamic colors here
  ],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at right 30% top 30%, var(--primary), var(--secondary), var(--secondary))",
        nav: "radial-gradient(circle at right 20% bottom 20%, var(--primary), var(--secondary))",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

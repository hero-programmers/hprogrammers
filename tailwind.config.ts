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
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "soft-white": "var(--white)",
        "soft-black": "var(--black)",
        "blue-flame": "#5c53fe",
        "hot-magenta": "#dc02ce",
        background: "#0D192B",
        "discord-white": {
          DEFAULT: "#F2F3F5",
          300: "#DBDEE1",
          600: "#D7D9DC",
        },
        "discord-black": {
          DEFAULT: "#313338",
          100: "#767A83",
          400: "#404249",
          900: "#202225",
        },
      },
      backgroundImage: {
        hero: "radial-gradient(circle at right 30% top 30%, var(--gradient-primary), var(--gradient-secondary), var(--gradient-secondary))",
        nav: "radial-gradient(circle at right 20% bottom 20%, var(--gradient-primary), var(--gradient-secondary))",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

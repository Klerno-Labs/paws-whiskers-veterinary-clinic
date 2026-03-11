import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a",
          foreground: "#FFFFFF",
        },
        secondary: "#1e293b",
        accent: "#86efac",
        background: "#f0fdf4",
        surface: "#ffffff",
        text: "#334155",
        muted: "#94a3b8",
        danger: "#ef4444",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      borderRadius: {
        large: "24px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(30, 41, 59, 0.05), 0 2px 4px -1px rgba(30, 41, 59, 0.03)",
        hover: "0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        text: 'rgb(var(--color-text))',
        muted: 'rgb(var(--color-muted))',
      },
    },
  },
  plugins: [],
};

export default config;
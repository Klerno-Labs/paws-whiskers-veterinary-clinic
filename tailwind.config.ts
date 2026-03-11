import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        secondary: '#1e293b',
        accent: '#86efac',
        background: '#f0fdf4',
        surface: '#ffffff',
        text: '#334155',
        muted: '#94a3b8',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(30, 41, 59, 0.05), 0 2px 4px -1px rgba(30, 41, 59, 0.03)',
        hover: '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
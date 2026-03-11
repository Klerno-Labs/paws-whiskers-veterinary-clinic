import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'sans-serif'],
        accent: ['var(--font-comfortaa)', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#16a34a', // Green 600
          foreground: '#ffffff',
        },
        secondary: '#1e293b', // Slate 800
        accent: '#86efac', // Green 300
        background: '#f0fdf4', // Green 50
        surface: '#ffffff',
        muted: '#94a3b8',
      },
      borderRadius: {
        'large': '24px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(30, 41, 59, 0.05), 0 2px 4px -1px rgba(30, 41, 59, 0.03)',
        'hover': '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
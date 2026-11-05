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
        kerala: {
          50: '#f2f9f5',
          100: '#e1f3ea',
          200: '#c4e7d6',
          300: '#97d5b8',
          400: '#63bd96',
          500: '#3ba278',
          600: '#2a8460',
          700: '#15543f',
          800: '#0f3e2e',
          900: '#0a2e22',
          950: '#051b14',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf2df',
          200: '#f4e2ba',
          300: '#ecce8a',
          400: '#e1b456',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        terracotta: {
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 62, 46, 0.06)',
        'card': '0 10px 30px -4px rgba(15, 62, 46, 0.08)',
        'card-hover': '0 20px 40px -4px rgba(15, 62, 46, 0.14)',
      },
    },
  },
  plugins: [],
};
export default config;

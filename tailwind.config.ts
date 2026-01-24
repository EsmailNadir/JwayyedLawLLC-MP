import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          dark: '#1a1a2e',      // Deep charcoal
          DEFAULT: '#2d3436',   // Dark slate
          light: '#3d4245',
        },
        accent: {
          DEFAULT: '#b87333',   // Bronze/Copper
          light: '#d4a574',
          dark: '#8b5a1f',
        },
        secondary: {
          DEFAULT: '#2d6a4f',   // Forest green (alternative accent)
          light: '#40916c',
          dark: '#1b4332',
        },
      },
    },
  },
  plugins: [],
}

export default config;

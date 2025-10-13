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
        // Custom color scheme: Yellow & Blackish Purple
        primary: {
          50: '#fffef5',   // Lightest yellow
          100: '#fffce0',
          200: '#fff9c2',
          300: '#fff494',
          400: '#fcde44',  // Main yellow (your custom color!)
          500: '#f5d12d',
          600: '#e8c01f',
          700: '#d4a615',
          800: '#b58a12',
          900: '#8a6610',  // Dark yellow
        },
        secondary: {
          50: '#f5f3ff',   // Lightest purple
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',  // Main purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',  // Blackish purple
          900: '#4c1d95',  // Darkest purple
          950: '#2e1065',  // Almost black purple
        },
        dark: {
          DEFAULT: '#070012', // Very dark blue-black (almost pure black)
          lighter: '#0f0524',
          darker: '#000000',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#fcde44',  // Yellow links
              '&:hover': {
                color: '#f5d12d',  // Darker yellow on hover
              },
            },
            code: {
              color: '#fcde44',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;


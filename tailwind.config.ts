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
          50: '#fefce8',   // Lightest yellow
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',  // Main yellow
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',  // Dark yellow
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
          DEFAULT: '#1a0b2e', // Very dark purple (almost black)
          lighter: '#2d1b4e',
          darker: '#0f0520',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#facc15',  // Yellow links
              '&:hover': {
                color: '#eab308',  // Darker yellow on hover
              },
            },
            code: {
              color: '#facc15',
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


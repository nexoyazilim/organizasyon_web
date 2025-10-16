/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e3bc9a',
          light: '#f0d4ba',
        },
        accent: {
          DEFAULT: '#d4a574',
          light: '#e3bc9a',
          dark: '#b8915e',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
        text: {
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
        'charcoal-gray': '#2B2B2B',
        'ten-rengi-2': '#F4E4C1',
        'ten-rengi-3': '#E8D4B5',
        'ten-rengi-4': '#D4C4A8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#166534',
          dark: '#0d3d1f',
          darker: '#0a2b15',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#f4d77a',
        },
        ink: '#111827',
        cream: '#fafaf7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};

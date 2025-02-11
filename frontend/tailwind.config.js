/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'matrix-bg': 'linear-gradient(to bottom, #0d0d0d, #1a1a1a)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // anek-devanagari: ['"Anek Devanagari"', 'sans-serif'],
      },
      colors: {
        red: {
          400: '#FF4D4D',
          500: '#FF0000',
          600: '#E60000',
          700: '#CC0000',
        },
      },
    },
  },
  plugins: [],
};

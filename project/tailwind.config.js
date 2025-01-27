/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': {
          DEFAULT: '#121212',
          'lighter': '#1E1E1E',
          'card': '#1A1A1A'
        }
      }
    },
  },
  plugins: [],
};
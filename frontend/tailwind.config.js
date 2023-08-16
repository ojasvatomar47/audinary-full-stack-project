/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad1: '#36454F',
        grad2: '#464646',
        grad3: '#626262',
        deepgold: '#B8860B',
        goldenrod: '#DAA520',
        darkgoldenrod: '#B8860B',
        lightgold: '#FFDF00',
      }
    },
  },
  plugins: [],
}
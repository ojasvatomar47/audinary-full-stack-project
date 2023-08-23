/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad1: '#030303',
        grad2: '#efc1a0',
        grad3: '#5a5a5a',
        primary: '#e6be8a',
        secondary: '#B76E79',
        buttonhover: '#b8860b',
      },
      fontFamily: {
        alveria: ['Averia Sans Libre', 'cursive'],
        lora: ['Lora', 'serif'],
        metal: ['Metal', 'cursive'],
        authortext: ['Freehand', 'cursive']
      }
    },
  },
  plugins: [],
}
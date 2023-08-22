/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad1: '#030b1c',
        grad2: '#efc1a0',
        grad3: '#464646',
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
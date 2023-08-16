/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad1: '#FAF0D7',
        grad2: '#464646',
        grad3: '#FFD9C0',
        primary: '#8CC0DE',
        secondary: '#CCEEBC',
        buttonhover: '#6A9ABD',
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
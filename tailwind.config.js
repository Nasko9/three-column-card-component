/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        details: 'hsl(0, 0%, 95%)'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFEB33',
        'black': '#313131',
        'bgColor': '#F7F7FF',
      },
    },
  },
  plugins: [],
}


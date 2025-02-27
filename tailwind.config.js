/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollPadding: {
        'nav': '6rem', // Sesuaikan dengan tinggi navbar
      },
    },
  },
  plugins: [],
}


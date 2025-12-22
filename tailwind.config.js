/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aloevera': ['Aloevera Display', 'sans-serif'],
        'nineties': ['Behind The Nineties', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#131416',
      "dark": "#0a0a0b",
      "white": "#fff",
    },
    extend: {
      boxShadow: {
        '3xl': '0 0px 100px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
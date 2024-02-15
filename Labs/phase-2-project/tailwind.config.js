/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./Background.jpeg')"
      }
      },
    fontFamily: {
      header: ["fabulous-pink-font"],
    },
  },
  plugins: [],
}


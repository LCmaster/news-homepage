/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softOrange: "#e9ab53",
        softRed: "#f15e50",
        offWhite: "#fffdfa",
        grayishBlue: "#c5c6ce",
        darkGrayishBlue: "#5d5f79",
        veryDarkBlue: "#00001a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

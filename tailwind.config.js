/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.js", "./src/*.jsx", "./src/**/*.jsx"],

  theme: {
    screens: {
      vsm: "400px",
      ...defaultTheme.screens,
      "3xl": "1600px",
    },

    extend: {
      colors: {
        primary: "#0d0821",
        daisy: {
          50: "#f5f2ff",
          100: "#ede7ff",
          200: "#ded2ff",
          300: "#c5afff",
          400: "#a981ff",
          500: "#904eff",
          600: "#852afd",
          700: "#7618e9",
          800: "#6214c3",
          900: "#5914ad",
          950: "#32096c",
        },
      },
    },
  },
  plugins: [],
};

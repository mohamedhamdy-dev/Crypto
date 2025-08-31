/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.js", "./src/*.jsx"],

  theme: {
    screens: {
      vsm: "400px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        primary: "#0d0821",
      },
    },
  },
  plugins: [],
};

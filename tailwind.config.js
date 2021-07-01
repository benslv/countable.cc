const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#1D1128",
      yellow: "#FFA630",
      white: colors.white,
      grey: colors.coolGray,
      indigo: colors.indigo,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

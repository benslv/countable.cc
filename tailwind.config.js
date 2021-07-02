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
      yellow: {
        DEFAULT: "#FFA630",
        hover: "#EC8600",
      },
      grey: colors.coolGray,
      indigo: colors.indigo,
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose, 
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

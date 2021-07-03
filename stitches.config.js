import { createCss } from "@stitches/react";

export const { styled, css, global, theme } = createCss({
  theme: {
    colors: {
      white: "#FBFBFB",
      black: "#000000",
      purpleLighter: "#3E2853",
      purpleLight: "#291D33",
      purple: "#1D1128",
      purpleDark: "#140D1C",
      yellow: "#FFA630",
      yellowDark: "#EC8600",
      blurple: "#5769E9",
      blurpleDark: "#4457E7",
      grey: "#808080",
    },
    fonts: {
      sans: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    },
    fontWeights: {
      1: "400",
      2: "600",
    },
    fontSizes: {
      0: "16px",
      1: "20px",
      2: "calc($1 * 1.5)",
      3: "calc($1 * 4)",
    },
    transitions: {
      1: "0.2s ease",
    },
    shadows: {
      black: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
      white:
        "0 0 10px -15px rgba(255,255,255,0.25), 0 0 10px -15px rgba(255,255,255,0.25);",
    },
  },
});

import { global } from "../stitches.config";

export const globalStyles = global({
  html: {
    boxSizing: "border-box",
    "font-size": "$1",
    height: "100%",
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$purple",
    height: "100%",
  },
  "#__next": {
    height: "100%",
  },
});

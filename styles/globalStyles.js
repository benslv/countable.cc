import { global } from "../stitches.config";

export const globalStyles = global({
  html: {
    boxSizing: "border-box",
    "font-size": "$1",
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$purple",
  },
});

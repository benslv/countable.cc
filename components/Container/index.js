import { styled } from "stitches.config";

export const Container = styled("div", {
  margin: "0 auto",
  width: "90%",

  "@md": {
    width: "calc(100vw - 200px)",
  },
});

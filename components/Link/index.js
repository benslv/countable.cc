import { styled } from "stitches.config";

export const Link = styled("a", {
  textDecoration: "none",
  fontFamily: "$sans",
  color: "$grey",
  fontWeight: "$2",

  transition: "$1",

  "&:hover, &:active, &:focus": {
    color: "$white",
  },

  "&:focus-visible": {
    outline: "2px solid $yellow",
    borderRadius: 5,
  },
});

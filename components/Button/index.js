import { styled } from "stitches.config";

const Wrapper = styled("a", {
  display: "inline-block",

  padding: "12px 30px",
  backgroundColor: "$yellow",
  borderRadius: 18,

  fontFamily: "$sans",
  fontWeight: "$2",
  color: "$white",
  textDecoration: "none",

  boxShadow: "$white",

  transition: "background-color $1",

  "&:hover": {
    backgroundColor: "$yellowDark",
  },

  variants: {
    color: {
      discord: {
        backgroundColor: "$blurple",
        "&:hover": {
          backgroundColor: "$blurpleDark",
        },
      },
    },
  },
});

export const Button = ({ link, children, ...delegated }) => {
  return (
    <Wrapper
      href={link}
      target="_blank"
      rel="noopenner noreferrer"
      {...delegated}
    >
      {children}
    </Wrapper>
  );
};

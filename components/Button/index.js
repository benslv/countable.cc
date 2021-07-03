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

  boxShadow:
    "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",

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
      className={`py-3 px-6 bg-yellow hover:bg-yellow-hover transition-colors rounded-2xl font-bold shadow-lg inline-block text-lg`}
      {...delegated}
    >
      {children}
    </Wrapper>
  );
};

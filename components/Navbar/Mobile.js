import { BiMenu } from "react-icons/bi";
import { styled } from "stitches.config";

const Button = styled("button", {
  position: "fixed",
  bottom: 25,
  right: 25,
  border: 0,

  boxShadow: "$black",

  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  padding: 15,

  "@sm": {
    display: "none",
  },

  background: "$yellow",
  transition: "$1",

  "&:active, &:focus": {
    background: "$yellowDark",
  },

  borderRadius: "50%",

  "z-index": 5,
});

const ButtonIcon = styled(BiMenu, {
  color: "$purple",
  fontSize: 32,
});

export const MobileNavbar = () => {
  return (
    <Button>
      <ButtonIcon />
    </Button>
  );
};

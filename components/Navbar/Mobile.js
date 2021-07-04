import { useState } from "react";

import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { styled } from "stitches.config";

import { Link } from "components/Link";
import { MobileMenu } from "./MobileMenu";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  padding: "60px 40px",
  paddingBottom: 0,

  "@sm": {
    display: "none",
  },
});

const Button = styled("button", {
  background: "none",
  border: 0,

  cursor: "pointer",
});

const ButtonIcon = styled("svg", {
  color: "$white",
  fontSize: 48,
});

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <MobileMenu />}
      <Wrapper>
        <Link href="#">
          <Image src="/images/countable.png" width={48} height={48} alt="" />
        </Link>
        <Button onClick={() => toggleOpen()}>
          {isOpen ? <ButtonIcon as={HiX} /> : <ButtonIcon as={HiMenu} />}
        </Button>
      </Wrapper>
    </>
  );
};

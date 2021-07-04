import Image from "next/image";
import { styled } from "stitches.config";

import { Heading } from "components/Heading";
import { Link } from "components/Link";

const Wrapper = styled("div", {
  display: "none",

  "@sm": {
    display: "flex",
    alignItems: "center",

    padding: "25px 50px",
  },

  "@lg": {
    padding: "25px 100px",
  },
});

const Nav = styled("nav", {
  display: "flex",
  columnGap: 40,
  justifyContent: "center",
  width: "100%",
});

const NavLink = styled(Link, {
  "&.current": {
    color: "$white",
  },
});

export const DesktopNavbar = () => {
  return (
    <Wrapper>
      {/* Countable logo */}
      <Link href="#">
        <Image src="/images/countable.png" width={50} height={50} alt="" />
      </Link>
      <Nav>
        <NavLink href="#" className="current">
          home
        </NavLink>
        <NavLink
          href="https://docs.countable.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </NavLink>
        <NavLink
          href="https://support.countable.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          support
        </NavLink>
      </Nav>
      <Heading size="1">✨</Heading>
      {/* Sparkle emoji */}
    </Wrapper>
  );
};

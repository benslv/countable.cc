import { styled } from "stitches.config";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "components/Link";

const Nav = styled(motion.nav, {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  rowGap: 30,

  margin: 20,
  marginTop: 40,
  padding: 30,

  background: "$purpleLight",
  boxShadow: "$black",

  borderRadius: 20,
});

const NavLink = styled(Link, {
  color: "$white",
});

const ThemeToggle = styled("button", {
  background: "none",
  border: 0,

  cursor: "pointer",

  fontSize: "$2",
});

export const MobileMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Nav
          layout
          initial={{ y: -350 }}
          animate={{ y: 0 }}
          exit={{ y: -350 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
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
          <ThemeToggle aria-label="Toggle dark/light mode">✨</ThemeToggle>
        </Nav>
      )}
    </AnimatePresence>
  );
};

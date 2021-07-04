import { styled } from "stitches.config";

import { Button } from "components/Button";
import { Example } from "components/Example";
import { Text } from "components/Text";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";

const ButtonHolder = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 30,

  "@sm": {
    flexDirection: "row",
  },
});

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 640,
  alignItems: "center",
  textAlign: "center",

  "@lg": {
    alignItems: "flex-start",
    textAlign: "left",
  },

  h1: {
    fontSize: "clamp($2 * 2, 10vw, $3)",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  gap: 100,

  "@lg": {
    height: 750,
    flexDirection: "row",
  },
});

export const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer>
        <Heading as="h1" size="2">
          Countable
        </Heading>
        <Text>
          Countable is a small, robust bot to help support and manage a counting
          channel in your Discord server!
        </Text>
        <Spacer axis="vertical" size={30} />
        <ButtonHolder>
          <Button link="https://invite.countable.cc" color="discord">
            Invite Countable
          </Button>
          <Button link="https://www.buymeacoffee.com/benslv">Donate</Button>
        </ButtonHolder>
      </HeroContainer>
      <Example />
    </Wrapper>
  );
};

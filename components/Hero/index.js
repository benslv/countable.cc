import { styled } from "stitches.config";

import { Button } from "components/Button";
import { Example } from "components/Example";
import { Text } from "components/Text";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";

const ButtonHolder = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: 30,
});

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 640,
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer className="flex flex-col gap-y-6 max-w-xl">
        <Heading as="h1" size="2">
          Countable
        </Heading>
        <Text>
          Countable is a small, robust bot to help support and manage a counting
          channel in your Discord server!
        </Text>
        <Spacer axis="vertical" size={30} />
        <ButtonHolder>
          <Button
            link="https://invite.countable.cc"
            className="bg-indigo-500 hover:bg-indigo-600"
            color="discord"
          >
            Invite Countable
          </Button>
          <Button link="https://www.buymeacoffee.com/benslv">Donate</Button>
        </ButtonHolder>
      </HeroContainer>
      <Example />
    </Wrapper>
  );
};

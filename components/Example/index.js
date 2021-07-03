import { styled } from "stitches.config";

import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { Count } from "./Count";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  padding: 30,

  background: "linear-gradient(180deg, $purpleLighter 0%, $purpleDark 100%)",

  minWidth: "max-content",
  width: 400,

  borderRadius: 25,

  overflow: "hidden",

  boxShadow: "0 0 50px -25px rgba(255,255,255,1)",

  position: "relative",

  "&::after": {
    content: "",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "background-image":
      "linear-gradient(to bottom, $purpleLighter 0, rgba(0,0,0,0) 100%)",
  },
});

const CountWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
});

const ChannelName = styled(Text, {
  fontWeight: "$2",
  zIndex: 2,
});

export const Example = () => {
  return (
    <Wrapper>
      <ChannelName># counting</ChannelName>
      <Spacer size={25} />
      <CountWrapper>
        <Count name="Ben" message="996" />
        <Count name="Eemeli" message="997" />
        <Count name="Ben" message="998" />
        <Count name="Eemeli" message="998" />
        <Count name="Countable" message="💥 Wrong number, @eemeli!" />
      </CountWrapper>
    </Wrapper>
  );
};

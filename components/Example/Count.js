import Image from "next/image";
import { styled } from "stitches.config";

import { Text } from "components/Text";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  columnGap: 15,
});

const Profile = styled(Image, {
  borderRadius: "50%",
  height: 50,
  width: 50,
});

const InnerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Count = ({ name, message }) => {
  return (
    <Wrapper>
      <Profile src="../../images/ben.svg" width={50} height={50} draggable="false" />
      <InnerWrapper>
        <Text css={{ fontSize: "$0" }}>{name}</Text>
        <Text>{message}</Text>
      </InnerWrapper>
    </Wrapper>
  );
};

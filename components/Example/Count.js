import Image from "next/image";
import { styled } from "stitches.config";

import { Text } from "components/Text";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  columnGap: 15,
  alignItems: "flex-start",
});

const Profile = styled(Image, {
  borderRadius: "50%",
  minWidth: 50,
});

const InnerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "calc(100% - (15px + 50px))", // Keeps the profile pictures a constant size.
});

export const Count = ({ name, message, img }) => {
  return (
    <Wrapper>
      <Profile src={img} width={50} height={50} draggable="false" alt="Example profile image" />
      <InnerWrapper>
        <Text css={{ fontSize: "$0" }}>{name}</Text>
        <Text>{message}</Text>
      </InnerWrapper>
    </Wrapper>
  );
};

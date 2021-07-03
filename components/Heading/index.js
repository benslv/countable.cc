import { styled } from "stitches.config";

import { Text } from "components/Text";

export const Heading = styled(Text, {
  fontWeight: "$2",
  lineHeight: 1,
  letterSpacing: "-0.04em",
  marginBottom: 10,

  variants: {
    size: {
      1: {
        fontSize: "$2",
      },
      2: {
        fontSize: "$3",
      },
    },
  },
});

import { styled } from "stitches.config";

function getHeight(axis, size) {
  return axis === "horizontal" ? 1 : size;
}
function getWidth(axis, size) {
  return axis === "vertical" ? 1 : size;
}

const Wrapper = styled("span", {});

export const Spacer = ({ axis = "", size = 1 }) => (
  <Wrapper
    css={{
      display: "block",
      width: getWidth(axis, size),
      minWidth: getWidth(axis, size),
      height: getHeight(axis, size),
      minWeight: getHeight(axis, size),
    }}
  />
);

import styled from "@emotion/styled";

import type { Theme } from "../../foundations/theming";
import type { ImageShapedProps } from "./ImageShaped";

function getImageBorder(_theme: Theme, border: ImageShapedProps["border"]) {
  return border ? `border: 1 solid red` : "";
}

const Wrapper = styled("div")<Pick<ImageShapedProps, "border" | "shape">>(
  ({ border, theme }) => `
      img {
        ${getImageBorder(theme, border)};
        border-radius: 30%;
      }
    `
);

export const Styled = {
  Wrapper,
};

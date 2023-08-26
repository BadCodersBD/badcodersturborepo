import styled from "@emotion/styled";

import type { IconProps } from "./Icon";

export const iconSizes = {
  extraSmall: "0.875rem", // 14px
  small: "1rem", // 16px
  medium: "1.5rem", // 24px
  large: "2rem", // 32px
  extraLarge: "2.5rem", // 40px
};

const Icon = styled("svg")<Pick<Required<IconProps>, "color" | "size">>`
  display: block;
  width: ${({ size }) => iconSizes[size]};
  height: ${({ size }) => iconSizes[size]};
  color: ${({ color }) => color};
  fill: none;
`;

export const Styled = {
  Icon,
};

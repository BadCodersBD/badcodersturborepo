import styled from "@emotion/styled";
import { Typography as MuiTypography } from "@mui/material";

import { getSpacingStyles } from "../../foundations/spacing";
import type { Theme } from "../../foundations/theming";
import type { TypographyProps } from "./Typography";

type StyledTypographyProps = Omit<
  TypographyProps,
  "children" | "tag" | "variant"
> & { component: React.ElementType };

function getColor(
  theme: Theme,
  design: Required<StyledTypographyProps>["design"]
) {
  if (design === "error") return theme.body.error.color;
  if (design === "discount") return theme.body.discount.color;

  return theme.body.background;
}

const Typography = styled(MuiTypography)<StyledTypographyProps>`
  color: ${({ theme, design }) => design && getColor(theme, design)};
  display: ${({ display }) => display};
  ${({ theme, ...props }) => getSpacingStyles(theme, props)}
  text-transform: ${({ casing }) => casing};
  hyphens: ${({ hyphens }) => hyphens};
`;

export const Styled = {
  Typography,
};

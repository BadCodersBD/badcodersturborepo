import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { SpacingProps } from "../../foundations/spacing";
import { getSpacingStyles } from "../../foundations/spacing";
import type { TypographyProps } from "../Typography";
import { Typography } from "../Typography";
import type { PriceProps } from "./Price";

type StyledPriceProps = TypographyProps & Pick<PriceProps, SpacingProps>;

const Price = styled(Typography)<StyledPriceProps>(
  ({ theme, ...props }) => css`
    ${getSpacingStyles(theme, props)}
  `
);

const WasPrice = styled(Typography)<StyledPriceProps>`
  text-decoration: line-through;
  margin-left: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.elements.price?.was.color};
`;

const ExclVAT = styled(Typography)<StyledPriceProps>`
  margin-left: ${({ display, theme }) =>
    display === "block" ? theme.spacing(0) : theme.spacing(0.5)};
  color: ${({ theme }) => theme.elements.price?.was.color};
`;

export const Styled = {
  Price,
  WasPrice,
  ExclVAT,
};

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { baseTheme } from "../../foundations/theming";
import type { TypographyProps } from "../Typography";
import { Typography } from "../Typography";
import type { HeadingProps } from "./Heading";

type StyledHeadingProps = TypographyProps &
  Omit<HeadingProps, "tag" | "children">;

const Heading = styled(Typography)<StyledHeadingProps>(
  ({ theme }) => css`
    color: ${baseTheme.colors.primary.green};
    hyphens: auto;
  `
);

export const Styled = {
  Heading,
};

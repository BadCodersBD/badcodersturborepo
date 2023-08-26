import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { Breakpoint } from "../../foundations/breakpoints";
import {
  orderedBreakpoints,
  smallestBreakpoint,
} from "../../foundations/breakpoints";
import type { Theme } from "../../foundations/theming";
import type { FullWidthProps } from "./FullWidth";

function getBreakpointStyles(
  theme: Theme,
  until: Breakpoint,
  current: Breakpoint
) {
  let breakpointStyles = "";

  if (current === until) {
    breakpointStyles = `
      margin-left: 0;
      margin-right: 0;
    `;
  } else if (
    orderedBreakpoints.indexOf(current) < orderedBreakpoints.indexOf(until)
  ) {
    breakpointStyles = `
      margin-left: -${theme.grid.margin.width[current]}px;
      margin-right: -${theme.grid.margin.width[current]}px;
    `;
  } else {
    return breakpointStyles;
  }

  if (current !== smallestBreakpoint) {
    breakpointStyles = `${theme.breakpoints.up(
      current
    )} { ${breakpointStyles} }`;
  }

  return breakpointStyles;
}

const FullWidth = styled.div<Pick<FullWidthProps, "until">>(
  ({ theme, until }) => css`
    ${getBreakpointStyles(theme, until, "xs")}
    ${getBreakpointStyles(theme, until, "sm")}
    ${getBreakpointStyles(theme, until, "md")}
    ${getBreakpointStyles(theme, until, "lg")}
    ${getBreakpointStyles(theme, until, "xl")}
  `
);

export const Styled = {
  FullWidth,
};

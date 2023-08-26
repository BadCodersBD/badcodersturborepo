import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  getBreakpointStyles,
  smallestBreakpoint,
} from "../../foundations/breakpoints";
import type { Theme } from "../../foundations/theming";
import type { ContentContainerProps } from "./ContentContainer";

function getContainerBreakpointStyles(theme: Theme, withMaxWidth: boolean) {
  return getBreakpointStyles(theme, (breakpoint) => {
    const maxWidth = `${
      theme.grid.container.maxWidth + theme.grid.margin.width[breakpoint] * 2
    }px;`;

    return css`
      max-width: ${withMaxWidth && maxWidth};
      padding-left: ${theme.grid.margin.width[breakpoint]}px;
      padding-right: ${theme.grid.margin.width[breakpoint]}px;
    `;
  });
}

function getNestedContainerStyles(
  theme: Theme,
  withMaxWidth: boolean,
  withNestedPadding: ContentContainerProps["withNestedPadding"]
) {
  if (withNestedPadding === true) return css``;

  const targetBreakpoint =
    typeof withNestedPadding === "object"
      ? withNestedPadding.until
      : smallestBreakpoint;

  return getBreakpointStyles(theme, (breakpoint) => {
    if (breakpoint !== targetBreakpoint) return null;

    const maxWidth = `${theme.grid.container.maxWidth}px`;

    return css`
      max-width: ${withMaxWidth && maxWidth};
      padding-left: 0;
      padding-right: 0;
    `;
  });
}

const Container = styled.div<
  Pick<Required<ContentContainerProps>, "withMaxWidth" | "withNestedPadding">
>`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: ${({ theme }) => theme.grid.site.minWidth}px;
  width: 100%;
  ${({ theme, withMaxWidth }) =>
    getContainerBreakpointStyles(theme, withMaxWidth)}
  .content-container & {
    min-width: 0;
    ${({ theme, withMaxWidth, withNestedPadding }) =>
      getNestedContainerStyles(theme, withMaxWidth, withNestedPadding)}
  }
`;

export const Styled = {
  Container,
};

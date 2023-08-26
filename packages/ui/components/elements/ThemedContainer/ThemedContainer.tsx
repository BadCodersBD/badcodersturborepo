import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";

import type { BorderRadii } from "../../foundations/borders";
import type { BreakpointSpecific } from "../../foundations/breakpoints";
import { smallestBreakpoint } from "../../foundations/breakpoints";
import type { SpacingFactor } from "../../foundations/spacing";
import type { ThemeName } from "../../foundations/theming";
import { themes } from "../../foundations/theming";
import { Styled } from "./ThemedContainer.styled";

export type ThemedContainerProps = {
  /**
   * The semantic HTML tag to use when rendering the component.
   */
  tag?: "div" | "section";
  /**
   * The name (key) of the themes object
   */
  theme: ThemeName;
  /**
   * Whether this container should set the background from the theme
   */
  withBackground?: boolean;
  fullHeight?: boolean;
  borderRadius?: BorderRadii;
  padding?: SpacingFactor | BreakpointSpecific<SpacingFactor>;
  children: ReactNode;
};

/**
 * Sets the specified theme for all children inside this tag, plus sets the new "body" styles.
 */
export function ThemedContainer({
  tag = "div",
  theme,
  padding,
  withBackground = true,
  fullHeight = true,
  children,
  ...props
}: ThemedContainerProps) {
  const paddingObj =
    padding && typeof padding === "number"
      ? { [smallestBreakpoint]: padding }
      : padding || undefined;

  return (
    <MuiThemeProvider theme={themes[theme] ?? themes["primary-blue"]}>
      <Styled.Container
        as={tag}
        fullHeight={fullHeight}
        padding={paddingObj}
        withBackground={withBackground}
        {...props}
      >
        {children}
      </Styled.Container>
    </MuiThemeProvider>
  );
}

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";

import { primaryBrown as theme } from "./themes/primaryBrown";
import type { Theme } from "./theming";

export const mockTheme: Theme = {
  ...theme,
  key: "testTheme",
  breakpoints: {
    ...theme.breakpoints,
    values: { xs: 0, sm: 375, md: 768, lg: 1024, xl: 1440 },
  },
  grid: {
    ...theme.grid,
    container: {
      ...theme.grid.container,
      maxWidth: 1536,
    },
    gutter: {
      ...theme.grid.gutter,
      width: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
    },
    margin: {
      ...theme.grid.margin,
      width: { xs: 24, sm: 32, md: 40, lg: 48, xl: 56 },
    },
  },
};

export function MockThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <MuiThemeProvider theme={mockTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

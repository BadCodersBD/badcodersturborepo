import type { PropsWithChildren } from "react";

import { MockValidationProvider } from "./contexts/ValidationContext.mock";
import { MockThemeProvider } from "./foundations/theming/ThemeProvider.mock";

export function wrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <MockValidationProvider>
      <MockThemeProvider>{children}</MockThemeProvider>
    </MockValidationProvider>
  );
}

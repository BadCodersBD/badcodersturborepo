import { baseTheme, createTheme } from "../theming";
import { darkFamily } from "./families/darkFamily";

export const primaryBlue = createTheme(darkFamily, {
  key: "primaryBlue",
  body: {
    background: { color: baseTheme.colors.primary.blue },
    discount: { color: baseTheme.colors.tertiary.lightBlue },
  },
});
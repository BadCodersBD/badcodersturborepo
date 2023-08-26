import styled from "@emotion/styled";

import type { Theme } from "../../foundations/theming";
import { optionalStyle } from "../../utils/optionalStyle";
import type { PlayButtonProps } from "./PlayButton";

function getStateStyles(theme: Theme) {
  return `
    &:hover {
      color: ${theme.colors.primary.yellow};
      background: ${theme.colors.primary.brown};
    }
    &:focus {
      outline: ${theme.borders.widths.md} solid ${theme.colors.neutrals.black};
      outline-offset: ${theme.borders.widths.md};
    }
    &:active {
      color: ${theme.colors.neutrals.white};
      background: ${theme.colors.primary.brown};
    }
    &:disabled {
      color: ${theme.colors.neutrals.white};
      background: ${theme.colors.neutrals.platinum};
      cursor: not-allowed;
    }
  `;
}

const Button = styled("button")<Pick<PlayButtonProps, "tag">>(
  ({ theme, tag }) => `
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borders.radii.round};
    color: ${theme.colors.primary.brown};
    cursor: ${optionalStyle("pointer", tag === "button")};
    background: ${theme.colors.primary.yellow};
    border: ${theme.borders.widths.xl} solid ${theme.colors.neutrals.white};
    ${optionalStyle(getStateStyles(theme), tag === "button")}
  `
);

export const Styled = {
  Button,
};

import styled from "@emotion/styled";
import { ButtonUnstyled } from "@mui/base";

import type { Theme } from "../../foundations/theming";
import type { CloseButtonProps } from "./CloseButton";

function getOutline(theme: Theme) {
  return `${theme.borders.widths.md} solid ${theme.colors.neutrals.black}`;
}

const CloseButton = styled(ButtonUnstyled)<
  Pick<Required<CloseButtonProps>, "padding">
>`
  cursor: pointer;
  display: block;
  margin: -${({ theme, padding }) => theme.spacing(padding)};
  padding: ${({ theme, padding }) => theme.spacing(padding)};
  color: ${({ theme }) => theme.elements.heading.color};
  transition: ${({ theme }) =>
    theme.transitions.create(["color"], {
      duration: theme.transitions.duration.shorter,
    })};
  &:hover {
    color: ${({ theme }) => theme.body.text.color};
  }
  &:focus {
    outline: ${({ theme }) => getOutline(theme)};
  }
`;

export const Styled = {
  CloseButton,
};

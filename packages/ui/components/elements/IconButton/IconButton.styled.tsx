import styled from "@emotion/styled";

import type { SpacingFactor } from "../../foundations/spacing";

const IconButton = styled.button<{ padding: SpacingFactor }>`
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
    outline: ${({ theme }) => theme.borders.widths.md} solid
      ${({ theme }) => theme.body.text.color};
  }
`;

export const Styled = {
  IconButton,
};

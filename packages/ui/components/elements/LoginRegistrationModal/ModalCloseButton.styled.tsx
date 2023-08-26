import styled, { css } from "styled-components";
import { baseTheme } from "ui/components/foundations/theming";

const CloseButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 3.125rem;
  display: block;
  z-index: 200;
  &:before,
  &:after {
    content: "";
    width: 55%;
    height: 0.125rem;
    background: ${baseTheme.colors.primary.red};
    position: absolute;
    top: 48%;
    left: 22%;
    transform: rotate(180deg);
    transition: all 0.3s ease-out;
  }

  &:hover {
    &:before,
    &:after {
      transform: rotate(-45deg);
      transition: all 0.3s ease-out;
    }

    &:after {
      transform: rotate(45deg);
      transition: all 0.3s ease-out;
    }
  }
`;
export const Styled = {
  CloseButton,
};

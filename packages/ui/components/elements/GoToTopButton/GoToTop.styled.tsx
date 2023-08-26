import styled, { keyframes } from "styled-components";
import { baseTheme } from "../../foundations/theming";

type ButtonProps = {
  isDarkMode: string;
};

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
    }
  50% {
    opacity: 0.7;
    }
  100% {
    opacity: 1; 
    }
`;

const Button = styled.button<ButtonProps>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode === "true"
      ? baseTheme.colors.neutrals.gray_black
      : baseTheme.colors.neutrals.gray_white};
  position: fixed;
  bottom: 6.5rem;
  right: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  animation: ${opacityAnimation} 0.5s ease-in-out;
  &:hover {
    background-color: ${baseTheme.colors.primary.green};
    transition: background-color 0.3s ease-in-out;
  }
`;

export const Styled = {
  Button,
};

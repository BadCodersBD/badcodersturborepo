import styled from "styled-components";
import { ButtonPropsType } from "../../../types/types";
import { baseTheme } from "../../foundations/theming";

const Button = styled.button<ButtonPropsType>`
  outline: none;
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border-radius: ${({ shape }) => shape || "0.625rem"};
  color: ${({ textColor }) =>
    textColor || baseTheme.colors.neutrals.full_white};
  min-width: 5rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ backgroundColor }) =>
      `rgba(${backgroundColor}, 0.5)` || baseTheme.colors.neutrals.full_black};
  }

  &:focus {
    outline: none;
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
        font-size: 0.8rem;
          padding: 0.4rem 0.5rem;
        `;
      case "medium":
        return `
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        `;
      case "large":
        return `
          font-size: 1rem;
          padding: 0.8rem 1.5rem;
        `;
      default:
        return `
          font-size: 1rem;
          padding: 0.5rem 1rem;
        `;
    }
  }}

  ${({ variant, backgroundColor, textColor }) => {
    switch (variant) {
      case "outline":
        return `
          color: ${textColor} ;
          background-color: transparent;
          border: 0.063rem solid ${backgroundColor};
        `;
      case "text":
        return `
          color: ${textColor};
          background-color: transparent;
        `;
      default:
        return `
          color: ${textColor};
          background-color: ${backgroundColor};
        `;
    }
  }}
`;

export const Styled = { Button };

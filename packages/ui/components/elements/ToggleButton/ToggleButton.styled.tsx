import styled from "@emotion/styled";
import { baseTheme } from "../../foundations/theming";
import { ToggleButtonProps } from "./ToggleButton";

export const btnSizes = {
  xm: "1.25rem", // 20px
  sm: "1.875rem", // 30px
  md: "2.5rem", // 40px
  lg: "3.125rem", // 50px
  xl: "3.75rem", // 60px
};

type ToggleButtonProps = {
  toggleHover?: string;
  isDark?: string;
};

const ToggleButton = styled.button`
  &.toggle {
    position: relative;
    width: ${({ variant }: ToggleButtonProps) => btnSizes[variant]};
    aspect-ratio: 1/1;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    span {
      position: absolute;
      width: 100%;
      height: ${({ lineStroke }: ToggleButtonProps) => lineStroke};
      background: ${({ isDark }: ToggleButtonProps) =>
        isDark === "true"
          ? baseTheme.colors.neutrals.full_white
          : baseTheme.colors.neutrals.full_black};
      border-radius: 0.25rem;
      transition: 0.5s;
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        background: ${({ toggleHover }: ToggleButtonProps) =>
          toggleHover === "true"
            ? baseTheme.colors.primary.green
            : ""} !important;
      }
      &:nth-of-type(1) {
        transform: translateY(
          calc(-${({ variant }: ToggleButtonProps) => btnSizes[variant]} * 0.3)
        );
      }
      &:nth-of-type(2) {
        transform: translateY(
          calc(${({ variant }: ToggleButtonProps) => btnSizes[variant]} * 0.3)
        );
      }
    }
    &.active {
      span {
        background: red;
        box-shadow: 0 0 0.625rem rgb(156, 17, 17),
          0 0 1.25rem rgb(192, 127, 127), 0 0 1.875rem rgb(82, 11, 11),
          0 0 2.5rem rgb(106, 12, 12);
        &:nth-of-type(1) {
          width: 70%;
          transform: translateY(0) rotate(45deg);
          transition-delay: 0.125s;
        }
        &:nth-of-type(2) {
          width: 70%;

          transform: translateY(0) rotate(315deg);
          transition-delay: 0.25s;
        }
        &:nth-of-type(3) {
          transform: translateX(200%);
        }
      }
    }
  }
`;

export const Styled = {
  ToggleButton,
};

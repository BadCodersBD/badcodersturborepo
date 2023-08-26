import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { getSpacingStyles } from "../../foundations/spacing";
import { baseTheme } from "../../foundations/theming";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

export const linkUnderlineAnimations = {
  primary: {
    initial: {
      "--link-underline-transform-scale-x": 1,
    },
    hover: {
      "--link-underline-transform-scale-x": 0,
      transition: {
        duration: baseTheme.transitions.duration.shorter / 1000,
        ease: "easeOut",
      },
    },
  },
  secondary: {
    initial: {
      "--link-underline-transform-scale-x": 0,
    },
    hover: {
      "--link-underline-transform-scale-x": 1,
      transition: {
        duration: baseTheme.transitions.duration.shorter / 1000,
        ease: "easeOut",
      },
    },
  },
  tertiary: {},
};

const LinkStyles = styled(Link)<Pick<Required<LinkProps>, "variant">>(
  ({ theme, inline }) =>
    !inline && { ...theme.typography["bodySmallBoldSans"] },
  ({ theme, variant }) => css`
    color: ${theme.elements.link.variants[variant].default.fontColor};
    cursor: pointer;
    text-decoration: none;
  `,
  ({ theme, variant, inline, ...props }) =>
    !inline &&
    variant !== "tertiary" &&
    css`
      position: relative;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: ${theme.spacing(0.5)};
      background: none;
      border: none;
      padding-bottom: ${6 / 16}rem;
      ${getSpacingStyles(theme, props)}
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${theme.elements.link.variants[variant].default
          .underlineHeight};
        background: ${variant === "primary"
          ? theme.elements.link.variants[variant].default.borderColor
          : theme.elements.link.variants[variant].hover.borderColor};
        transform: scaleX(var(--link-underline-transform-scale-x));
        transform-origin: ${variant === "primary" ? "100% 50%" : "0% 50%"};
        transition: ${theme.transitions.create(["transform"], {
          duration: theme.transitions.duration.shorter,
        })};
      }
      &:hover {
        color: ${theme.elements.link.variants[variant].hover.fontColor};
      }
      &:focus {
        outline: ${theme.elements.link.variants[variant].focus.outline};
        outline-offset: ${theme.spacing(0.25)};
      }
      &:active {
        outline: none;
        &::after {
          transform: scaleX(1);
        }
      }
      &:disabled {
        color: ${theme.elements.link.variants[variant].disabled.fontColor};
        cursor: not-allowed;
        &::after {
          display: none;
        }
      }
    `,
  ({ variant, inline }) =>
    !inline &&
    variant === "primary" &&
    css`
      --link-underline-transform-scale-x: 1;
      &:hover {
        --link-underline-transform-scale-x: 0;
      }
    `,
  ({ variant, inline }) =>
    !inline &&
    variant === "secondary" &&
    css`
      --link-underline-transform-scale-x: 0;
      &:hover {
        --link-underline-transform-scale-x: 1;
      }
    `,
  ({ theme, variant, inline }) =>
    (inline || variant === "tertiary") &&
    css`
      display: inline;
      border-bottom: ${theme.elements.link.variants[variant].default
          .underlineHeight}
        solid ${theme.elements.link.variants[variant].default.borderColor};
      padding-bottom: 0;
      transition: ${theme.transitions.create(["border-bottom-color"], {
        duration: theme.transitions.duration.shorter,
      })};
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      @media (hover: hover) {
        &:hover {
          border-bottom-color: ${theme.elements.link.variants[variant].hover
            .borderColor};
          color: ${theme.elements.link.variants[variant].hover.fontColor};
        }
      }
      &:active {
        border-bottom-color: ${theme.elements.link.variants[variant].default
          .borderColor};
      }
    `
);

export const IconContainer = styled("span")`
  position: relative;
  top: ${1 / 16}rem;
`;

export const External = styled.span<Pick<LinkProps, "inline" | "variant">>`
  display: inline-flex;
  margin-left: ${({ theme, inline, variant }) =>
    theme.spacing(inline || variant === "tertiary" ? 0.5 : 0)};
`;

export const Styled = {
  LinkStyles,
  IconContainer,
  External,
};

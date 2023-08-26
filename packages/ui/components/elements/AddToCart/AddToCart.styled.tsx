import styled from "styled-components";
import { baseTheme } from "ui/components/foundations/theming";

const Price = styled.span`
  background: ${baseTheme.colors.neutrals.gray_black};
  border: 0;
  margin: 0;
  transform: translateX(-10%);
  box-shadow: 0.625rem 0.313rem 0.313rem ${baseTheme.colors.neutrals.gray_black};
  padding-right: 0.938rem;
  transition: transform 0.6s;
  display: flex;
  height: 100%;
  padding: 0.1rem 0.5rem;
  margin: 0;
  box-shadow: -0.688rem -0.063rem 0.313rem 0rem rgba(0, 0, 0, 1);
  border-radius: 0rem !important;
`;

const ShoppingCart = styled.span`
  background: ${baseTheme.colors.neutrals.gray_black};
  border: 0;
  margin: 0;
  transform: translateX(-100%);
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.6s;
  display: flex;
  height: auto;
  padding: 0.75rem 1rem;
  margin: 0;
`;

const Button = styled.button`
  position: relative;
  transform: translateY(0rem);
  transition: 2.5s linear;
  background: linear-gradient(
    90deg,
    ${baseTheme.colors.primary.black} 0%,
    ${baseTheme.colors.primary.black} 4%,
    ${baseTheme.colors.primary.red} 5%,
    ${baseTheme.colors.primary.red} 100%
  );
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${baseTheme.colors.neutrals.full_white};
  &:hover {
    background: linear-gradient(
      90deg,
      ${baseTheme.colors.primary.black} 0%,
      ${baseTheme.colors.primary.black} 4%,
      ${baseTheme.colors.secondary.red} 5%,
      ${baseTheme.colors.secondary.red} 100%
    );
  }
  &:active {
    background: ${baseTheme.colors.primary.green};
    transition: filter 0.01s ease 0.02s;
  }
  &:hover ${Price} {
    transform: translateX(-110%);
  }
  &:hover ${ShoppingCart} {
    transform: translateX(0%);
    box-shadow: 0.125rem 0rem 0.438rem ${baseTheme.colors.primary.black};
  }
`;

const Buy = styled.span`
  z-index: 3;
  transition: transform 0.6s;
  display: inline-block;
  padding: 0.15rem 0rem;
  padding-right: 0.3rem;
  padding-left: 0rem;
  margin: 0;
  white-space: nowrap;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const Styled = { Price, ShoppingCart, Button, Buy };

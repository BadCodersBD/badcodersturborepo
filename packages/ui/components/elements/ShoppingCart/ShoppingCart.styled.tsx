import styled from "@emotion/styled";
import { GridRow } from "ui/components/elements/GridRow/GridRow";
import { GridColumn } from "ui/components/elements/GridColumn/GridColumn";
import { size } from "ui/components/foundations/breakpoints/device";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { baseTheme } from "ui/components/foundations/theming";

type ShoppingCartProps = {
  isDarkMode?: string | boolean;
  ecom?: boolean;
};
const ShoppingCartContainer = styled.div<ShoppingCartProps>`
  background-color: ${({ ecom, isDarkMode, theme }) =>
    isDarkMode === "true" || ecom
      ? theme.colors.primary.black
      : theme.colors.neutrals.full_white};
  color: ${({ isDarkMode, ecom, theme }) =>
    isDarkMode === "true" || ecom
      ? theme.colors.neutrals.full_white
      : theme.colors.primary.black};
  padding: 1rem;
  margin: auto;
  @media (max-width: ${size.sm}) {
    padding: 0rem;
  }
  border-radius: 0.5rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (max-width: ${size.sm}) {
    font-size: 1rem;
    padding-top: 10px;
  }
`;

const CartWrapper = styled.div`
  width: clamp(18rem, 75vw, 35rem);
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 1.4rem auto;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.313rem grey;
    border-radius: 0.5rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.green};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.black};
  }
`;
const CartItemGridRow = styled(GridRow)`
  width: 100% !important;
  margin: 0.2rem auto !important;
  padding: 0rem 1.5rem 0 0rem;
  border-radius: 0.275rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.neutrals.gray_white};
  @media (max-width: ${size.xs}) {
    padding: 0rem 5rem;
  }
`;
const CartItemGridColumn = styled(GridColumn)`
  margin: auto 0;
  padding: 0rem;
`;
const RemoveButton = styled.button`
  text-align: start;
  text-style: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.red};
  }
`;

const CustomNumberInput = styled.form<ShoppingCartProps>`
  height: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  @media (min-width: ${size.sm}) {
  }
  #decrease {
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  #increase {
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  .value-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.063rem solid ${baseTheme.colors.neutrals.gray_white};
    margin: 0rem;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    @media (min-width: ${size.sm}) {
      width: 1.563rem;
      height: 1.563rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
  input[type="number"] {
    text-align: center;
    border: 0.063rem solid ${baseTheme.colors.neutrals.gray_white};
    font-size: 0.825rem;
    margin: 0rem;
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ isDarkMode, theme }) =>
      isDarkMode
        ? theme.colors.neutrals.full_white
        : theme.colors.primary.black};
    background: ${({ isDarkMode, theme }) =>
      isDarkMode
        ? theme.colors.primary.black
        : theme.colors.neutrals.full_white};
    @media (min-width: ${size.sm}) {
      width: 2.5rem;
      height: 1.563rem;
    }
  }
  input[type="number"] {
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
const DeleteProductButton = styled(DeleteOutlineIcon)`
  margin-top: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.red};
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary.red};
  }
`;

const DeleteAnimationButton = styled.a`
  position: relative;
  width: 6rem;
  height: 1.5rem;
  transform: translate(-20%, 0%);
  background: ${baseTheme.colors.neutrals.gray_black};
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0 0.313rem 1.25rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media (min-width: ${size.xs}) {
    transform: none;
  }
  ::active {
    background: ${baseTheme.colors.secondary.red};
    span {
      left: 50%;
      transform: translateY(-40%) translateX(-50%) rotate(-45deg);
      border-radius: 0;
      width: 1rem;
      height: 0.625rem;
      margin-top: -0.2rem;
      background: transparent;
      border-left: 0.125rem solid ${baseTheme.colors.neutrals.full_white};
      border-bottom: 0.125rem solid ${baseTheme.colors.neutrals.full_white};
    }
    span::before {
      transform: scale(0);
    }
    text {
      transform: translateX(-50px) translateY(-5px) scale(0);
    }
    &:hover {
      span {
        transform: translateY(-40%) translateX(-50%) rotate(-45deg);
      }
      span::before {
        transform: scale(0);
      }
    }
  }
  span {
    position: absolute;
    top: 45%;
    left: 1.25rem;
    transform: translateY(-20%) rotate(0);
    width: 0.625rem;
    height: 0.75rem;
    display: inline-block;
    background: ${baseTheme.colors.neutrals.full_white};
    border-bottom-left-radius: 0.188rem;
    border-bottom-right-radius: 0.188rem;
    transition: 0.2s;
    text-decoration: none;
    &::before {
      content: "";
      position: absolute;
      top: -0.2rem;
      width: 100%;
      height: 0.125rem;
      background: ${baseTheme.colors.neutrals.full_white};
      box-shadow: 0.75rem -0.125rem 0 ${baseTheme.colors.neutrals.gray_white} 0.75rem -0.188rem
        0 ${baseTheme.colors.neutrals.gray_white} 0.5rem -0.125rem 0 ${baseTheme
          .colors.neutrals.gray_white} 0.125rem -0.125rem 0
        ${baseTheme.colors.neutrals.full_white};
      transition: 0.5s;
    }
  }
  &:hover {
    span {
      transform: scale(1.2) rotate(60deg) translateY(0.125rem);
      &::before {
        transform: rotate(-90deg) translateX(50%) translateY(-0.625rem);
      }
    }
  }
  text {
    position: absolute;
    right: 1.25rem;
    color: ${baseTheme.colors.neutrals.full_white};
    transition: 0.5s;
    font-size: 0.865rem;
  }
`;

export const Styled = {
  ShoppingCartContainer,
  Heading,
  CartItemGridRow,
  CartItemGridColumn,
  CartWrapper,
  RemoveButton,
  CustomNumberInput,
  DeleteProductButton,
  DeleteAnimationButton,
};

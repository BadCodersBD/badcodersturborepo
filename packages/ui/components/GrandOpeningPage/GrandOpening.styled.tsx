import { baseTheme } from "ui/components/foundations/theming";
import styled, { keyframes } from "styled-components";

type props = {
  color: string;
};

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
   30% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  opacity: 1;
  transition: opacity 0.5s;
  animation: ${fadeInOut} 7s ease-in-out infinite;
`;

const InputMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 90%;
  position: relative;
`;

const Input = styled.input<props>`
  width: 100%;
  padding: 0.7rem 1.5rem;
  border: 0.1rem solid;
  outline: none;
  border-color: ${({ color }) => color};
  border-radius: 0.5rem;
  color: black;
  &:hover {
    border-color: ${({ color }) => color + "99"};
  }
`;

const Button = styled.button<props>`
  position: absolute;
  top: 9%;
  right: 0.3rem;
  font-weight: 400;
  padding: 0.5rem 1.3rem;
  border-radius: 0.5rem;
  z-index: 99;
  cursor: pointer;
  background: ${({ color }) => color};
  color: #ffffff;
  &:hover {
    background: ${({ color }) => color + "99"};
  }
`;

const Lato = "'Lato'";

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  .bloc-time {
    margin: 0.625rem;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }
  }

  .count-title {
    display: block;
    margin-bottom: 0.938rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .figure {
    position: relative;
    float: left;
    height: 7.188rem;
    width: 6.25rem;
    margin-right: 0.625rem;
    background-color: ${baseTheme.colors.primary.green};
    border-radius: 0.5rem;
    box-shadow: 0rem 0.188rem 0.25rem 0rem rgba(0, 0, 0, 0.2),
      inset 0.125rem 0.25rem 0rem 0rem rgba(255, 255, 255, 0.08);

    &:last-child {
      margin-right: 0;
    }

    > span {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      font: normal 4em/107px ${Lato};
      font-weight: 700;
      color: ${baseTheme.colors.neutrals.full_white};
    }

    .top {
      z-index: 3;
      background-color: ${baseTheme.colors.secondary.medium_dark_green};
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
    }
    .top,
    .top-back {
      height: 50%;
    }
  }
`;
const Title = styled.h1<props>`
  background: ${({ color }) => color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Styled = {
  Countdown,
  ImageContainer,
  InputMain,
  Input,
  Button,
  Title,
};

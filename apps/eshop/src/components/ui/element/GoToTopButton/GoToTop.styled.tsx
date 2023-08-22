import styled, { keyframes } from "styled-components";

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

const Button = styled.button`
  background-color: #000000;
  position: fixed;
  bottom: 6.5rem;
  right: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  animation: ${opacityAnimation} 0.5s ease-in-out;
  &:hover {
    background-color: #000fff;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const Styled = {
  Button,
};

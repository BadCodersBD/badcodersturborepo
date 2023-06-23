import styled from "styled-components";

const Navigation = styled.button`
  cursor: pointer;
  color: #000000;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  height: auto;
  font-size: 1rem;
  scroll-behavior: smooth;

  &:hover {
    color: green;
    background: transparent;
    box-shadow: none;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #000000;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

export const Styled = {
  Navigation,
};

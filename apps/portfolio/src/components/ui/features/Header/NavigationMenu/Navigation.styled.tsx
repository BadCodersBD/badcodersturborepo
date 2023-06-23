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
    color: white;
    background-color: blue;
    box-shadow: none;
  }
`;

export const Styled = {
  Navigation,
};

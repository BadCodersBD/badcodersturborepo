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
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: #F00000;
    box-shadow: none;
    transition: 0.3s;
  }
`;

export const Styled = {
  Navigation,
};

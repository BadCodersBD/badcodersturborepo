import styled from "styled-components";

const Footer = styled.div`
  width: 100% !important;
  height: auto;
  padding: 2rem;
  background-color: #322D53;
  color: white;
  @media (min-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

export const Styled = {
  Footer,
  Heading,
};

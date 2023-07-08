import styled from "styled-components";

const Main = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  height: auto;
  background-color: #fdfdfd;
  color: #000000;
`;

const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 3px 15px -3px #000000;
  box-shadow: 0px 3px 15px -3px #000000;
`;

export const Styled = {
  Main,
  Card,
};

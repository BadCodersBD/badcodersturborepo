import styled from "styled-components";

const Main = styled.div`
  position: relative;
  padding-top: 5rem;
  width: 100%;
  height: auto;
  background-color: #fdfdfd;
  color: #000000;
`;

const Content = styled.div`
  padding-left: 5rem;
`;

const Greetting = styled.div`
  text-align: start;
  padding-top: 4rem;
  margin-left: 1rem;
  margin-bottom: -2.5rem;
  font-size: 4rem;
  line-height: 2.5rem;
  background: -webkit-linear-gradient(gray, transparent);
  background-clip: clip;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Heading = styled.h1`
  text-align: start;
  font-size: 5rem;
  font-weight: 600;
  padding-top: 0.5rem;
  opacity: 0.8;
`;

const designation = styled.h1`
  text-align: start;
  font-size: 2rem;
  font-weight: 400;
  padding-top: 0.5rem;
`;

export const Styled = {
  Main,
  Content,
  Greetting,
  Heading,
  designation,
};

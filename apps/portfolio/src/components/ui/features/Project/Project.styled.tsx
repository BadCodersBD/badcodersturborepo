import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  padding: 1rem;
  width: 100%;
  height: auto;
  background-color: #fdfdfd;
  color: #000000;
`;

const Card = styled.div`
  cursor: pointer;
  height: auto;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 3px 15px -3px #000000;
  box-shadow: 0px 3px 15px -3px #000000;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: 0.3s;
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Styled = {
  Main,
  Card,
  CardImage,
};

import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  margin-top: 2rem;
  background-color: #ffffff;
  color: #000000;
  overflow: hidden !important;
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  border: 1.5px solid #494949;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  transition: 0.5s;
  ${Card}:hover & {
    transform: scale(1.1);
    object-fit: contain;
    transition: 0.5s;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const SeeMore = styled.button`
  width: auto;
  height: auto;
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid #000000;
  border-radius: 40px;
  background-color: #ffffff;
  color: #000000;
  &:hover {
    color: white;
    background-color: #373837;
    box-shadow: none;
    transition: 0.3s;
  }
`;


export const Styled = {
  Main,
  Card,
  CardImage,
  Title,
  SeeMore,
};

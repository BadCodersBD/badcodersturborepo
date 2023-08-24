import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 0rem 2rem 1rem 2rem;
  background-color: #ffffff;
  color: #000000;
`;

const Card = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: auto;
  padding: 1rem;
  border: 1.5px solid #0003BE;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  &:hover {
    color: white;
    background-color: #373837;
    box-shadow: none;
    transition: 0.3s;
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  transition: 0.3s;
  ${Card}:hover & {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

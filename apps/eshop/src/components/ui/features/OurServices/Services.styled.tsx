import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  background-color: #ffffff;
  color: #000000;
`;

const Card = styled.div`
  background-color: #cbc9c2;
  width: 100%;
  height: auto;
  padding: 1rem;
  border: 1.5px solid #cbc9c2;
  border-radius: 20px;
  cursor: pointer;
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

const Subspan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5rem;
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

const Viewdetails = styled.button`
    width: auto;
    height: auto;
    padding: 0.8rem 1.5rem 1rem 0.8rem;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #262929;
    color: #FFFFFF;
    &:hover {
    color: #000000;
    background-color: #B4BBBD;
    box-shadow: none;
    transition: 0.3s;
  }
`;

const BookNow = styled.button`
    width: auto;
    height: auto;
    padding: 0.8rem 1.5rem 1rem 0.8rem;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #088824;
    color: #FFFFFF;
    &:hover {
    color: #000000;
    background-color: #0B8F37;
    box-shadow: none;
    transition: 0.3s;
  }
    
`;

export const Styled = {
  Main,
  Card,
  CardImage,
  Title,
  Subspan,
  SeeMore,
  Viewdetails,
  BookNow,
};
import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  color: #ffffff;
  @media (min-width: 1024px) {
    padding-top: 5rem;
  }
`;

const CarouselImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 1025px) {
    height: 350px;
  }
  @media (min-width: 1400px) {
    height: 400px;
  }
`;

export const Styled = {
    Main,
    CarouselImage,
};

import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 1rem 2rem;
  background-color: #242323;
  color: #000000;
`;

const LocationImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

export const Styled = {
    Main,
    LocationImage,
  };
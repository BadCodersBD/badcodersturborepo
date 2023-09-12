import styled from "styled-components";
import Image from "next/image";

const Main = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  color: #000000;
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 20px;
  background-color: #f3eeee;
  `;

export const Styled = {
  Main,
  Card,
};

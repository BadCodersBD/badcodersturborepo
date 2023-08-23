import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  position: fixed;
  scroll-behavior: smooth;
  z-index: 1000;
  display: flex;
  background-color: #ffffff;
  height: 5rem;
  width: 100%;
  justify-content: space-between;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-size: 1.125rem;
  color: white;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0.2,0,0.2,0.2);
  -webkit-box-shadow: 0rem 0.5rem 0.5rem rgba(0.2,0,0.2,0.2);
  -moz-box-shadow: 0rem 0.5rem 0.5rem rgba(0.2,0,0.2,0.2);
`;

// Define keyframes
const glow = keyframes`
  from {
    text-shadow: 0px 0px 5px #2C2B2B, 0px 0px 5px #614ad3;
  }
  to {
    text-shadow: 0px 0px 20px #2C2B2B, 0px 0px 20px #614ad3;
  }
`;

const Glowtext = styled.span`
  font-size: 1.5rem;
  color: #000000;
  font-family: 'Merienda', cursive;
  animation-name: ${glow};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const Styled = {
  Header,
  Glowtext,
};

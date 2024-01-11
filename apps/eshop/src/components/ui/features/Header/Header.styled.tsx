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
  box-shadow: 0rem 0.2rem 0.2rem rgba(0.2,0,0.2,0.2);
  -webkit-box-shadow: 0rem 0.2rem 0.2rem rgba(0.2,0,0.2,0.2);
  -moz-box-shadow: 0rem 0.2rem 0.2rem rgba(0.2,0,0.2,0.2);
`;

// Define keyframes
const glow = keyframes`
  from {
    text-shadow: 0px 0px 5px #2C2B2B, 0px 0px 5px #F04603;
  }
  to {
    text-shadow: 0px 0px 20px #2C2B2B, 0px 0px 20px #F04603;
  }
`;

const Glowtext = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #EC062D;
  font-family: 'Merienda', cursive;
  animation-name: ${glow};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;


const LoginButton = styled.button`
  color: #000000;
  border: 1px solid;
  border-color: #000000;
  white-space: nowrap;
  &:hover {
    background-color: #F08408;
    color: #000000;
  }
`;
const RegistrationButton = styled.button`
  color: #000000;
  border: 1px solid;
  border-color: #000000;
  white-space: nowrap;
  &:hover {
    background-color: #F08408;
    color: #000000;
  }
`;

export const Styled = {
  Header,
  Glowtext,
  LoginButton,
  RegistrationButton,
};

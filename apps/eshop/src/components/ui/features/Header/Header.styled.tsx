import styled from "styled-components";

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

export const Styled = {
  Header,
};

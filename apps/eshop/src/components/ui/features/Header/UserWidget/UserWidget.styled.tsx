import styled from "styled-components";
import Link from "next/link";

const Url = styled(Link)`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: #009c00;
  padding: 0.45rem;
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: #009c00;
    box-shadow: none;
    transition: 0.3s;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  border: 1px solid;
  border-color: #000000;
  white-space: nowrap;
  border-radius: 20px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  &:hover {
    background-color: #f08408;
    color: #000000;
  }
`;
const RegistrationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  border: 1px solid;
  border-color: #000000;
  white-space: nowrap;
  border-radius: 20px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  &:hover {
    background-color: #f08408;
    color: #000000;
  }
`;

export const Styled = {
  Url,
  LoginButton,
  RegistrationButton,
};

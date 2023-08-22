import styled from "styled-components";

const Newsletter = styled.div`
  position: relative;
  height: 25rem;
  width: 100%;
  padding-top: 3rem;
  justify-content: center;
  display: flex;
  background-color: #ffffff;
`;

const Title = styled.h1`
  position: absolute;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 35px;
    font-weight: 600;
  }
`;

const Content = styled.h1`
  position: absolute;
  text-align: center;
  height: 1rem;
  width: 37rem;
  font-size: 24px;
  margin-top: 5rem;
  color: #000000;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    margin-top: 6rem;
  }
`;

const InputMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
`;

const Input = styled.input`
  width: 50%;
  padding: 18px 36px;
  margin: 8px 0;
  border: 1px solid #a34405;
  box-sizing: border-box;
  height: 70px;
  background-color: #a8a4a4;
  margin-top: 10rem;
  border-radius: 10px;
  border: none;
  color: black;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
  &::-webkit-input-placeholder {
    font-size: 16px;
    line-height: 3;
    color: #717171;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 12rem;
  }
`;

const Button = styled.button`
  width: 12%;
  top: 18.5rem;
  right: 25.5%;
  position: absolute;
  font-size: 16px;
  text-transform: capitalize;
  display: inline-block;
  font-weight: 400;
  padding: 16px 32px;
  border-radius: 10px;
  border: #c74900;
  cursor: pointer;
  background-color: #ca4a00;
  color: #000000;
  &:hover {
    background-color: #c74900;
  }
  @media (max-width: 1025px) {
    width: 18%;
    right: 26%;
    top: 18.4rem;
    font-size: 16px;
  }

  @media (max-width: 770px) {
    width: 30%;
    right: 2%;
    top: 20.5rem;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    width: 35%;
    right: 2%;
    top: 20.5rem;
    font-size: 12px;
  }
`;

export const Styled = {
  Newsletter,
  Title,
  Content,
  Input,
  Button,
  InputMain,
};

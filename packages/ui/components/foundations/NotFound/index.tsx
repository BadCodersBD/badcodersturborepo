import React from "react";
import { Styled } from "./NotFound.styled";

const NotFound: React.FC = () => (
  <Styled.Page404>
    <Styled.FourZeroFourBgH1>404</Styled.FourZeroFourBgH1>
    <Styled.FourZeroFourBg></Styled.FourZeroFourBg>
    <Styled.ContantBox404>
      <Styled.FourZeroFourBgH3>Look like you're lost</Styled.FourZeroFourBgH3>
      <h4 className="text-center text-xl ">
        the page you are looking for not avaible!
      </h4>
      <Styled.Link404 href="/">Go to Home</Styled.Link404>
    </Styled.ContantBox404>
  </Styled.Page404>
);

export default NotFound;

import React from "react";
import { Styled } from "./checkoutButton.styled";

export type Buttoncolotype = {
  backgroundColor: string;
  textcolor: string;
  backgroundHoverColor: string;
};

export type CheckoutbuttonType = {
  buttoncolor: Buttoncolotype;
  buttoname: string;
  title: string;
  type: any;
};

const CheckoutButton = ({
  buttoname,
  title,
  type,
  buttoncolor,
}: CheckoutbuttonType) => {
  return (
    <div>
      <Styled.CheckoutButton
        buttoncolor={buttoncolor}
        title={title}
        type={type}
      >
        {buttoname}
      </Styled.CheckoutButton>
    </div>
  );
};

export default CheckoutButton;

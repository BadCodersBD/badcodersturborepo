import React from "react";
import { Styled } from "../Header.styled";


const UserWidget = () => {
  return (
    <div className="flex space-x-4 py-5 font-semibold">
      <Styled.LoginButton
        disabled={true}
        className="rounded-3xl cursor-not-allowed border-2 w-full h-full py-0.5 px-3"
      >
        Log In
      </Styled.LoginButton>
      <Styled.RegistrationButton
        disabled={true}
        className="rounded-3xl cursor-not-allowed border-2 w-full h-full py-0.5 px-3"
      >
        Register
      </Styled.RegistrationButton>
    </div>
  );
};

export default UserWidget;

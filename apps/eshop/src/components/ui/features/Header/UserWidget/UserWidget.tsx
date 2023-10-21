import React from "react";
import { Styled } from "./UserWidget.styled";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const UserWidget = () => {
  const router = useRouter();
  const cookies = new Cookies();

  // console.log("cookies user data", cookies.get("userData"));

  return (
    <div className="flex gap-4 py-5 font-semibold">
      {cookies.get("userData") ? (
        <>
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              // cookies.set("userData", null);
              router.push("/profile");
            }}
          >
            My Profile
          </Styled.LoginButton>
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              cookies.set("userData", null);
              router.push("/login");
            }}
          >
            Logout
          </Styled.LoginButton>
        </>
      ) : (
        <>
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            LogIn
          </Styled.LoginButton>
          <Styled.RegistrationButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/register");
            }}
          >
            Sign Up
          </Styled.RegistrationButton>
        </>
      )}
    </div>
  );
};

export default UserWidget;

import React from "react";
import { Styled } from "../Header.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const UserWidget = () => {
  const router = useRouter();
  const cookies = new Cookies();

  console.log("cookies user data", cookies.get("userData"));

  return (
    <div className="flex space-x-4 py-5 font-semibold">
      {cookies.get("userData") ? (
        <>
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              // cookies.set("userData", null);
              router.push("/profile");
            }}
            className="rounded-3xl border-2 w-full h-full py-0.5 px-3"
          >
            My Profile
          </Styled.LoginButton>
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              cookies.set("userData", null);
              router.push("/login");
            }}
            className="rounded-3xl border-2 w-full h-full py-0.5 px-3"
          >
            Logout
          </Styled.LoginButton>
        </>
      ) : (
        <>
          {" "}
          <Styled.LoginButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
            className="rounded-3xl border-2 w-full h-full py-0.5 px-3"
          >
            Log In
          </Styled.LoginButton>
          <Styled.RegistrationButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/register");
            }}
            className="rounded-3xl border-2 w-full h-full py-0.5 px-3"
          >
            Sign Up
          </Styled.RegistrationButton>
        </>
      )}
    </div>
  );
};

export default UserWidget;

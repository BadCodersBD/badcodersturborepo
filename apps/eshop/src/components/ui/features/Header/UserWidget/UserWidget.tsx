import React from "react";
import { Styled } from "../Header.styled";
import Link from "next/link";
import { useRouter } from "next/router";

const UserWidget = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-4 py-5 font-semibold">
      <Styled.LoginButton className="rounded-3xl border-2 w-full h-full py-0.5 px-3">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          Log In
        </Link>
      </Styled.LoginButton>
      <Styled.RegistrationButton className="rounded-3xl border-2 w-full h-full py-0.5 px-3">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            router.push("/register");
          }}
        >
          Sign Up
        </Link>
      </Styled.RegistrationButton>
    </div>
  );
};

export default UserWidget;

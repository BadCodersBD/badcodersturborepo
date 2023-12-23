import React, { useState, useEffect, useMemo } from "react";
import { Styled } from "./UserWidget.styled";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

export type UserData = {
  user: {
    username: string;
    email: string;
    isAdmin: boolean;
  };
}

const UserWidget = () => {
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []); // Create cookies object
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDataFromCookie = cookies.get("userData");
    if (userDataFromCookie) {
      setUserData(userDataFromCookie);
    }
  }, [cookies]);


  return (
    <div className="flex gap-4 py-5 font-semibold">
      {userData ? (
        <>
          <Styled.LoginButton
             onClick={(e) => {
              e.preventDefault();
              
              // If userData exists and isAdmin is true, redirect to admindashboard
              if (userData && userData.user.isAdmin === true) {
                router.push("/admindashboard");
              } else {
                router.push("/profile");
              }
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

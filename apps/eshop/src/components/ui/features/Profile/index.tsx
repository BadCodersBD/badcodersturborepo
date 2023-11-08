import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import { Styled } from "./Profile.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export type UserData = {
  user: {
    username: string;
    email: string;
  };
};

const UserProfile = () => {
  const cookies = useMemo(() => new Cookies(), []); // Create cookies object
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDataFromCookie = cookies.get("userData");
    if (userDataFromCookie) {
      setUserData(userDataFromCookie);
    }
  }, [cookies]);

  return (
    <div className="min-h-screen text-black bg-white w-full">
      <div className="text-center border ">
        {userData && (
          <div className="flex justify-center items-center pt-10">
            <Styled.Card>
              <h1 className="pb-5 text-xl font-bold">Personal Information</h1>
              <AccountCircleIcon fontSize="large" />
              <h1 className="pt-10">Name: {userData.user.username}</h1>
              <h1 className="pt-10">Email Address: {userData.user.email}</h1>
            </Styled.Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

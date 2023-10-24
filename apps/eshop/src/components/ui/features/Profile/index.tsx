import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";

export type UserData = {
  user: {
    username: string;
    email: string;
  };
}

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
    <div className="min-h-screen text-white">
      <h1 className="pt-10">User Profile</h1>
      {userData && (
        <>
          <h1 className="pt-10">Name: {userData.user.username}</h1>
          <h1 className="pt-10">Email Address: {userData.user.email}</h1>
        </>
      )}
    </div>
  );
};

export default UserProfile;

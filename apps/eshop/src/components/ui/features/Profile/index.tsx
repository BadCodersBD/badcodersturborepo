import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const UserProfile = () => {
  const cookies = new Cookies();
  const userData = cookies.get("userData");

  // console.log(userData.user.email)
  // console.log(userData.user.username)

  
  return (
    <div className="min-h-screen text-white">
      <h1 className="pt-10">User Profile</h1>
      <h1 className="pt-10">Name: {userData.user.username}</h1>
      <h1 className="pt-10">Email Adress: {userData.user.email}</h1>
    </div>
  );
};

export default UserProfile;

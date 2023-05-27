import React from "react";

const UserWidget = () => {
  return (
    <div className="inline space-x-4 py-5 text-black">
      <button className="rounded-2xl border-2 border-green-500 py-0.5 px-3 hover:bg-green-500 hover:text-white">
        Log In
      </button>
      <button className="rounded-2xl border-2 border-green-500 py-0.5 px-3 hover:bg-green-500 hover:text-white">
        Register
      </button>
    </div>
  );
};

export default UserWidget;

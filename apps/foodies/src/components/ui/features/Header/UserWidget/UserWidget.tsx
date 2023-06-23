import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link"

const UserWidget = () => {
  return (
    <div className="flex justify-center space-x-4 py-5 text-black">
      <Link href="https://github.com/rakibkhanofficial" className="flex rounded-3xl border-2 w-full h-full border-black py-0.5 px-3 hover:bg-black hover:text-white">
        Github
        <GitHubIcon/>
      </Link>
      <Link href="https://www.linkedin.com/in/rakibkhanofficial" className="flex rounded-3xl border-2 w-full h-full border-black py-0.5 px-3 hover:bg-black hover:text-white">
        LinkedIn
        <AccountCircleIcon/>
      </Link>
    </div>
  );
};

export default UserWidget;

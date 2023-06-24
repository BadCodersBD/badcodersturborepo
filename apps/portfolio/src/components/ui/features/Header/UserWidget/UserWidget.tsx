import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link"

const UserWidget = () => {
  return (
    <div className="flex justify-center space-x-4 py-5 text-black">
      <Link href="https://github.com/rakibkhanofficial" className="flex rounded-3xl border-2 w-full h-full border-fuchsia-900 py-1 px-3 hover:bg-fuchsia-900 hover:text-white">
        Github
        <GitHubIcon/>
      </Link>
      <Link href="https://www.linkedin.com/in/rakibkhanofficial" className="flex rounded-3xl border-2 w-full h-full border-blue-800 py-1 px-3 hover:bg-blue-800 hover:text-white">
        LinkedIn
        <LinkedInIcon/>
      </Link>
    </div>
  );
};

export default UserWidget;

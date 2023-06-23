import React, { useState } from "react";
import Image from "next/image";
import NavigationDrawer from "./NavigationMenu/NavigationDrawer";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import UserWidget from "./UserWidget/UserWidget";
import MenuIcon from "@mui/icons-material/Menu";
import {Styled} from "./Header.styled";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Styled.Header>
      <div className="flex">
        <div className="flex">
          {/* <span>
          <Image
          src="/vercel.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{width: '100%', height: '100%'}}
          alt="Logo"
          className="hidden md:inline"
        />
          </span> */}
        <Styled.Signature>
          {"<Rakib Khan />"}
        </Styled.Signature>
        </div>
        <button onClick={() => setOpen(!open)} className="inline lg:hidden">
          <div className="mr-4 text-black">
            <MenuIcon className="h-10 w-10" />
          </div>
          <NavigationDrawer open={open} />
        </button>
      </div>
      <NavigationMenu />
      <div className="flex">
        <UserWidget />
      </div>
    </Styled.Header>
  );
};

export default Header;

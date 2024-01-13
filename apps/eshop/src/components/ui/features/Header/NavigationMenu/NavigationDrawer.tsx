import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { Styled } from "./Navigation.styled";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import UserWidget from "../UserWidget/UserWidget";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Data = [
  {
    name: "Home",
    id: "#home",
    Icon: <HomeOutlinedIcon fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Brands",
    id: "#brand",
    Icon: <DirectionsCarOutlinedIcon fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Our Services",
    id: "#services",
    Icon: <HomeRepairServiceIcon fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Why Choose Us",
    id: "#whychoose",
    Icon: <LiveHelpOutlinedIcon fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Download App",
    id: "#download",
    Icon: <ArrowDownwardOutlinedIcon fontSize="medium" />,
    href: "#home",
  },
  // {
  //   name: "About Us",
  //   id: "#aboutus",
  //   Icon: <BusinessIcon color={"success"} fontSize="medium" />,
  //   href: "#home",
  // },
];

const NavigationDrawer = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const rect = elem.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      window.scrollTo({
        top: top - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Drawer anchor={"right"} open={props.open} onClose={() => setOpen(false)}>
        <div className="my-2 flex flex-col px-2 py-4">
          {Data.map(({ name, id, Icon, href }, index) => (
            <Link
              className="mx-2"
              key={index}
              href={`${id}`}
              onClick={handleScroll}
            >
              <Styled.Navigation>
                <span>{Icon}</span>
                <span>{name}</span>
              </Styled.Navigation>
            </Link>
          ))}
          <UserWidget />
        </div>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;

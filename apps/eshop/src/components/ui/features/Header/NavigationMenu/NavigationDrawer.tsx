import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { Styled } from "./Navigation.styled";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessIcon from "@mui/icons-material/Business";
import UserWidget from "../UserWidget/UserWidget";

export const Data = [
  {
    name: "Home",
    id: "#home",
    Icon: <HomeIcon color={"success"} fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Brands",
    id: "#brand",
    Icon: <AirportShuttleIcon color={"success"} fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Our Services",
    id: "#services",
    Icon: <HomeRepairServiceIcon color={"success"} fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Why Choose Us",
    id: "#whychoose",
    Icon: <FmdGoodIcon color={"success"} fontSize="medium" />,
    href: "#home",
  },
  {
    name: "Download App",
    id: "#contact",
    Icon: <ContactsIcon color={"success"} fontSize="medium" />,
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
                {name}
                <span />
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

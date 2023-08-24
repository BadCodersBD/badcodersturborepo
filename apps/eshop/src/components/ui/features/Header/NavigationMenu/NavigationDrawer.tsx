import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { Styled } from "./Navigation.styled";

export const Data = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "Our Services",
    id: "#services",
  },
  {
    name: "Our Collection",
    id: "#gallery",
  },
  {
    name: "Brands",
    id: "#brand",
  },
  {
    name: "Contact Us",
    id: "#contact",
  },
  {
    name: "About Us",
    id: "#aboutus",
  },
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
        <div className="my-2 flex flex-col py-4">
          {Data.map(({ name, id }, index) => (
            <Link
              className="mx-2"
              key={index}
              href={`${id}`}
              onClick={handleScroll}
            >
              <Styled.Navigation>{name}</Styled.Navigation>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;

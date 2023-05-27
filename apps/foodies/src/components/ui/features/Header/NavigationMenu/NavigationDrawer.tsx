import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";

export const Data = ([
    {
      name: 'Home',
      url: '/Development',
    },
    {
      name: 'Our Brands',
      url: '/under-construction',
    },
    {
      name: 'About Us',
      url: '/about',
    },
    {
      name: 'Career',
      url: '/under-construction',
    },
    {
      name: 'Contact Us',
      url: '/under-construction',
    },
    {
      name: 'Media',
      url: '/under-construction',
    },
  ]);

 const NavigationDrawer = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className="">
      <Drawer anchor={"left"} open={props.open} onClose={() => setOpen(false)}>
        <div className="my-2 flex flex-col py-4">
          {Data.map(({ name, url }, index) => (
            <Link
              className="mx-6 py-1 hover:border-b-green-500"
              key={index}
              href={`${url}`}
            >
              <span className="cursor-pointer text-slate-500 hover:text-green-600">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;

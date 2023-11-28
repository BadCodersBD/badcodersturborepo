import React from "react";
import SimpleBottomNavigation from "../ui/features/BottomNavigation/BottomNavigation";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
  topheader?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
};

const AdminProfileLayout = ({ children, header, footer, sidebar }: Props) => {
  return (
    <div className="w-full">
      {header}
      <div className="flex w-full">
        {sidebar}
        <div className=" min-h-screen flex-grow  md:flex-[4]">
          <main>{children}</main>
        </div>
      </div>
      <footer className="w-full">{footer}</footer>
      <div className=" sm:hidden ">
        <SimpleBottomNavigation />
      </div>
      <Toaster />
    </div>
  );
};

export default AdminProfileLayout;

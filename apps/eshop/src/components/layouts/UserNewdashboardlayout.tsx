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

const UserNewDashboardLayout = ({
  children,
  header,
  footer,
  sidebar,
}: Props) => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        {sidebar}
        <div className=" min-h-screen flex-grow  md:flex-[4]">
          {header}
          <main>{children}</main>
          <footer className="w-full">{footer}</footer>
        </div>
      </div>
      <div className=" sm:hidden ">
        <SimpleBottomNavigation />
      </div>
      <Toaster/>
    </div>
  );
};

export default UserNewDashboardLayout;

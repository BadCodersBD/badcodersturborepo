import React, { useState, useEffect, useMemo } from "react";
import { Styled } from './UserHeader.styled'
import Avatar from '@mui/material/Avatar'
import { Dropdown } from '@mui/base'
import { Menu } from '@mui/base'
import { StyledMui } from './MuiCustom.Styled'
import UserHeaderUtils from './UserHeader.utils'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Cookies from "universal-cookie";

export type UserData = {
  user: {
    username: string;
    email: string;
    image: string;
  };
}

const ManageAccountHeader = () => {
  const { handleSignUp, setAdminSidebarToggle } = UserHeaderUtils()
  const cookies = useMemo(() => new Cookies(), []); // Create cookies object
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDataFromCookie = cookies.get("userData");
    if (userDataFromCookie) {
      setUserData(userDataFromCookie);
    }
  }, [cookies]);

  return (
    <Styled.HeaderWrapper>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <div className=" flex justify-start items-center md:hidden text-white">
            <button
              className=" bg-zinc-600 p-2 ml-4"
              type="button"
              title="button"
              onClick={() => {
                setAdminSidebarToggle(true)
              }}
            >
              <MenuOpenIcon />
            </button>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className=" text-white lg:flex justify-center items-center gap-10">
            <Link href="/" className="hidden lg:inline hover:text-lime-500 hover:underline">
              Home
            </Link>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className="flex justify-end items-center">
            <Dropdown>
              <StyledMui.TriggerButton>
                {userData?.user ? (
                  <>
                    {userData?.user.image && userData.user.image !== 'null' ? (
                      <Avatar className="bg-orange-500" alt="Profile Picture" src={userData?.user.image} />
                    ) : (
                      <Avatar className="bg-orange-500">
                        {userData?.user?.username?.slice(0, 1) || userData?.user?.email?.slice(0, 1)}
                      </Avatar>
                    )}
                  </>
                ) : (
                  <div className="pt-1">
                    <Avatar src="/broken-image.jpg" />
                  </div>
                )}
              </StyledMui.TriggerButton>
              <Menu slots={{ listbox: StyledMui.StyledListbox }}>
                <StyledMui.StyledMenuItem>Profile</StyledMui.StyledMenuItem>
                <StyledMui.StyledMenuItem onClick={handleSignUp}>
                  {userData?.user ? 'Sign Out' : 'Sign In'}
                </StyledMui.StyledMenuItem>
              </Menu>
            </Dropdown>
          </div>
        </Grid>
      </Grid>
    </Styled.HeaderWrapper>
  )
}

export default ManageAccountHeader

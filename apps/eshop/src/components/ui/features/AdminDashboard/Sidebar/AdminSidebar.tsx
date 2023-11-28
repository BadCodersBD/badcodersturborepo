import React from 'react'
import { Styled } from './AdminSidebar.styled'
import UserSidebarUtils from './AdminSidebar.utils'
import CloseIcon from '@mui/icons-material/Close'
import SidebarBody from './Body/SidebarBody'

const AdminSidebar = () => {
  const { sidebarToggle, setAdminSidebarToggle } = UserSidebarUtils()

  return (
    <Styled.SideBarWrapper
      className={` ${
        sidebarToggle ? 'ml-[0%] md:ml-[0%]' : 'ml-[-110%] md:ml-[0%]'
      } transition-all duration-300 ease-in-out  fixed z-[1000] top-0 left-0 w-[300px] flex-0 md:relative md:top-[unset] md:left-[unset] md:flex-1   min-h-screen`}
    >
      <SidebarBody />
      <Styled.CloseButton
        onClick={(e: any) => {
          setAdminSidebarToggle(false)
        }}
        className="button-base ripple md:hidden text-white"
      >
        <CloseIcon />
      </Styled.CloseButton>
    </Styled.SideBarWrapper>
  )
}
export default AdminSidebar

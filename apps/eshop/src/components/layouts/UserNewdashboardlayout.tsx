import React from 'react'
import Grid from '@mui/material/Grid'
import SimpleBottomNavigation from '../ui/features/BottomNavigation/BottomNavigation'
import { Toaster } from 'react-hot-toast'

type Props = {
  children: React.ReactNode
  topheader?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  sidebar?: React.ReactNode
}

const UserNewDashboardLayout = ({ children, header, footer, sidebar }: Props) => {
  return (
    <div>
      <div className=" flex-grow md:flex-[4]  min-h-screen">
        {header}
        <Grid container spacing={2}>
          <Grid item lg={3}>
            {sidebar}
          </Grid>
          <Grid item lg={9}>
            {children}
          </Grid>
        </Grid>
      </div>
      <div className=" sm:hidden ">
        <SimpleBottomNavigation />
      </div>
      <footer>{footer}</footer>
      <Toaster />
    </div>
  )
}

export default UserNewDashboardLayout

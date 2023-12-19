import React from 'react'
import SimpleBottomNavigation from '../ui/features/BottomNavigation/BottomNavigation'
import UserProfile from '../ui/features/Profile'
import Header from "@/components/ui/features/Header/Header";
import GoToTopButton from '../ui/element/GoToTopButton/GoToTopButton';
import Footer from "@/components/ui/features/footer/Footer";


const ProfileLayout = () => {
  return (
    <div>
      <Header/>
      <UserProfile/>
      <GoToTopButton/>
      <Footer/>
      <div className="inline md:hidden">
        <SimpleBottomNavigation />
      </div>
    </div>
  )
}

export default ProfileLayout

// test comment

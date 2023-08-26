import * as React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'
import { Styled } from './BottomNavigation.styled';
// import Language from '../Header/UserWidget/Language/LanguageDropdown'
import { useEffect, useRef, useState } from 'react'
// import { useSession } from 'next-auth/react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InventoryIcon from '@mui/icons-material/Inventory'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CollectionsIcon from '@mui/icons-material/Collections';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SimpleBottomNavigation = () => {
  const firstNavItemRef = useRef<HTMLAnchorElement>(null)
  // const { data: session } = useSession()

  const [navigationData] = useState([
    {
      name: 'Brands',
      Icon: <BrandingWatermarkIcon fontSize="small" />,
      url: '/under-construction',
    },
    {
      name: 'Dashboard',
      Icon: <DashboardIcon fontSize="small" />,
      url: '/adminDashboard',
    },
    {
      name: 'My Dashboard',
      Icon: <DashboardIcon fontSize="small" />,
      url: '/deliveryManDashboard',
    },
  ])

  const [isVisible, setIsVisible] = useState(true)
  const prevScrollY = useRef(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > prevScrollY.current) {
      setIsVisible(false) // Scrolling down, hide navigation
    } else {
      setIsVisible(true) // Scrolling up, show navigation
    }

    prevScrollY.current = currentScrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <Styled.Nav>
          <Styled.NavItem ref={firstNavItemRef} href="/">
            <Styled.Span>
              <HomeIcon />
            </Styled.Span>
            <Styled.Span>Home</Styled.Span>
          </Styled.NavItem>
          <Styled.NavItem href="/service">
            <Styled.Span>
              <InventoryIcon />
            </Styled.Span>
            <Styled.Span>Service</Styled.Span>
          </Styled.NavItem>
          {/* {navigationData.map(({ name, Icon, url }, index) => {
            if (
              (name === 'Dashboard' && session?.user?.role !== 'admin') ||
              (name === 'My Dashboard' && session?.user?.role !== 'deliveryMan') ||
              (name === 'Brands' && session?.user?.role === 'deliveryMan')
            ) {
              return null
            }
            return (
              <Styled.NavItem key={index} href={url}>
                <Styled.Span>{Icon}</Styled.Span>
                <Styled.Span>{name}</Styled.Span>
              </Styled.NavItem>
            )
          })} */}
          <Styled.NavItem href="/contact-us">
            <Styled.Span>
              <CollectionsIcon />
            </Styled.Span>
            <Styled.Span>Collection</Styled.Span>
          </Styled.NavItem>
          <Styled.NavItem href="/contact-us">
            <Styled.Span>
              <AccountCircleIcon />
            </Styled.Span>
            <Styled.Span>My Profile</Styled.Span>
          </Styled.NavItem>
          <Styled.NavItem>
          </Styled.NavItem>
        </Styled.Nav>
      )}
    </div>
  )
}

export default SimpleBottomNavigation

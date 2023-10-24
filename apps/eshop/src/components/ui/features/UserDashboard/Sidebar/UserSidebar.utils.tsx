import { useState, useEffect } from 'react'
import { adminSidebarToggleState } from '../../../../../utils/sidebar/adminSidebarToggle'
import { useRecoilState } from 'recoil'
import { useViewportSize } from 'ui/components/hooks/useViewportSize'

const UserSidebarUtils = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [adminSidebarToggle, setAdminSidebarToggle] = useRecoilState(adminSidebarToggleState)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update the viewport size
    function updateViewportSize() {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener to update the viewport size when the window is resized
    window.addEventListener('resize', updateViewportSize);

    // Initial update of viewport size
    updateViewportSize();

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, [])

  useEffect(() => {
    adminSidebarToggle && viewportSize.width <= 992 ? setSidebarToggle(true) : setSidebarToggle(false)
  }, [adminSidebarToggle, viewportSize.width])

  return { sidebarToggle, adminSidebarToggle, setAdminSidebarToggle }
}

export default UserSidebarUtils

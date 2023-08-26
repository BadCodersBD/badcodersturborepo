// import { Styled } from './TopHeader.styled'
// import { useRecoilState } from 'recoil'
// import { modalOpenState } from 'ui/components/elements/LoginRegistrationModal/ModalOpen'
// import Location from '../Header/UserWidget/Location/Location'
// import { useSession } from 'next-auth/react'
// import TopBanner from './TopBanner'
// import { useMemo } from 'react'

// export const TopHeaderMenu = () => {
//   const [, setModalOpen] = useRecoilState(modalOpenState)
//   const { data: session, status } = useSession() // Retrieve session status

//   const handleRegister = () => {
//     setModalOpen({
//       open: true,
//       modalName: 'Register',
//     })
//   }

//   const handleSignUp = () => {
//     setModalOpen({
//       open: true,
//       modalName: 'Login',
//     })
//   }

//   const handleFeedBack = () => {
//     setModalOpen({
//       open: true,
//       modalName: 'Feedback',
//     })
//   }

//   const renderMenuItems = useMemo(() => {
//     if (status === 'loading') {
//       return <div className="flex h-8 w-full items-center justify-end bg-zinc-800">Loading...</div>
//     }

//     if (session?.user) {
//       // Render menu items for logged-in user
//       return (
//         <>
//           <Styled.LinkOne href="/under-construction">
//             <Styled.Name>Help</Styled.Name>
//           </Styled.LinkOne>
//           <Styled.LinkOne href="">
//             <Styled.Name onClick={() => handleFeedBack()}>Feedback</Styled.Name>
//           </Styled.LinkOne>
//         </>
//       )
//     } else {
//       // Render menu items for guest user
//       return (
//         <>
//           <Styled.LinkOne href="#">
//             <Styled.Name onClick={() => handleSignUp()}>Login</Styled.Name>
//           </Styled.LinkOne>
//           <Styled.LinkOne href="#">
//             <Styled.Name onClick={() => handleRegister()}>Register</Styled.Name>
//           </Styled.LinkOne>
//           <Styled.LinkOne href="/under-construction">
//             <Styled.Name>Help</Styled.Name>
//           </Styled.LinkOne>
//           <Styled.LinkOne href="#">
//             <Styled.Name onClick={() => handleFeedBack()}>Feedback</Styled.Name>
//           </Styled.LinkOne>
//         </>
//       )
//     }
//   }, [session, status])

//   return (
//     <div className="flex flex-col">
//       <TopBanner />
//       <div className="flex h-8 w-full items-center justify-end bg-zinc-800">
//         <div className="text-white hover:text-green-500">
//           <Location />
//         </div>
//         {renderMenuItems}
//       </div>
//     </div>
//   )
// }

// export default TopHeaderMenu

import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(44, 43, 43, 0.8);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px 10px 0px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`

const NavItem = styled(Link)`
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 8px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0);
  transform: scale(1);
  transform-origin: center;
  transition: opacity 0.1s ease, transform 0.1s ease, top 0.1s ease;
  &:focus {
    text-decoration: none;
    color: white;
    background-color: rgba(114, 114, 114, 0.2);
    transform: scale(1.1);
  }

  &:focus span {
    width: 100%;
    transform: scale(1.1);
  }
`

const Span = styled.span`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 12px;
`

export const Styled = {
  Nav,
  NavItem,
  Span,
}

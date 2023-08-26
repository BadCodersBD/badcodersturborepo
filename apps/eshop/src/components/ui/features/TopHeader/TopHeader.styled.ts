import NavLink from "next/link";
import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
100% {
    transform: translateX(-100%);
}
`;

const TopBannerMain = styled.div`
  background-color: #0c0c0c;
  overflow: hidden;
`;

const TopBanner = styled.h1`
  font-size: clamp(0.5rem, 0.2619rem + 1.1905vw, 1.2rem);
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  white-space: nowrap;
  background-color: #000000;
  color: #22f506;
  animation: ${slideInFromLeft} 40s linear infinite;

  @media (max-width: 376px) {
    font-size: 0.5rem;
    line-height: 1rem;
    animation: ${slideInFromLeft} 10s linear infinite;
  }
`;

const Name = styled.div`
  height: 0.313rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  padding: 1rem;
  @media screen and (max-width: 1024px) {
    padding: 0.8rem;
  }
`;

const LinkOne = styled(Link)`
  color: #ffffff;
  padding: 0.8rem;
  &:hover {
    color: 22f506;
    text-shadow: 0 0 0.625rem #22f506;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  &:after {
    bottom: 0.5rem;
    content: "";
    display: block;
    height: 0.17rem;
    left: 24%;
    position: absolute;
    background: #02a81e;
    opacity: 0.6;
    transition: width 0.3s ease 0s, opacity 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 60%;
    opacity: 1;
  }
`;

export const Styled = {
  LinkOne,
  Name,
  TopBannerMain,
  TopBanner,
};

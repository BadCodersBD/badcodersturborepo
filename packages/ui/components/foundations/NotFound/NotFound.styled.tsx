import styled from "styled-components";
import { baseTheme } from "ui/components/foundations/theming";
import Link from "next/link";
import Image from "next/image";

const Page404 = styled.section`
  padding: 2.5rem;
  background: ${baseTheme.colors.neutrals.full_white};
  font-family: "Arvo", serif;
`;

const Page404Img = styled(Image)`
  width: 100%;
`;

const FourZeroFourBg = styled.div`
  background-image: url("/404.gif");
  background-repeat: no-repeat;
  height: 25rem;
  background-position: center;
`;

const FourZeroFourBgH1 = styled.h1`
  position: absolute;
  left: 42%;
  font-size: 6.25rem;
  font-family: cursive;
`;

const FourZeroFourBgH3 = styled.h3`
  font-size: 5rem;
  text-align: center;
`;

const Link404 = styled(Link)`
  color: ${baseTheme.colors.neutrals.full_white} !important;
  padding: 0.625rem 1.25rem;
  background: ${baseTheme.colors.primary.green};
  border-radius: 0.625rem;
  display: inline-block;
  &:hover {
    background: ${baseTheme.colors.secondary.medium_dark_green};
  }
`;

const ContantBox404 = styled.div`
  margin-top: -3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Styled = {
  Page404,
  Page404Img,
  FourZeroFourBg,
  FourZeroFourBgH1,
  FourZeroFourBgH3,
  Link404,
  ContantBox404,
};

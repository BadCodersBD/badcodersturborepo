import styled from "styled-components";
import { size } from "ui/components/foundations/breakpoints/device";
import { baseTheme } from "ui/components/foundations/theming";

export const HeadingOutline = styled.h1`
position: relative;
margin-left: 1rem;
margin-bottom: -2.5rem;
font-size: 4.5rem;
line-height: 7.5rem;
background: -webkit-linear-gradient(gray, transparent);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media screen and (max-width: ${size.xl}) {
  margin-bottom: -0.5rem;
  font-size: 2.5rem;
  line-height: 3rem;
}
@media screen and (max-width: ${size.x2l}) {
  margin-bottom: -0.5rem;
  font-size: 3.5rem;
  line-height: 3rem;
}
`;

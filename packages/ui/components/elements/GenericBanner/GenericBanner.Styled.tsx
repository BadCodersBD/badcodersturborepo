import styled, { css } from "styled-components";
import { baseTheme } from "ui/components/foundations/theming";
import { size } from "ui/components/foundations/breakpoints/device";

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: red;
  @media (min-width: 769px) {
    padding-left: 1.25rem;
  }
`;

const shoppingButton = styled.a`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 14px;
background: #F59C27;
width: 140px;
padding: 10px;
text-align: center;
text-decoration: none;
color: #fff;
border-radius: 8px;
cursor: pointer;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
transition-duration: 0.3s;
transition-property: box-shadow, transform;
&:hover, &:focus, &:active {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}
@media screen and (max-width: ${size.xs}) {
  width: 80px;
  height: 40px;
  font-size: 5px;
  margin-right: 20px;
  }
@media screen and (max-width: ${size.ms}) {
  width: 80px;
  height: 40px;
  font-size: 5px;
  margin-right: 20px;
  }
@media screen and (max-width: ${size.sm}) {
  width: 180px;
  height: 40px;
  font-size: 5px;
  margin-right: 20px;
  }

  @media screen and (max-width: ${size.md}) {
    width: 80px;
    height: 40px;
    font-size: 5px;
    margin-right: 20px;
    }
`

export const Styled = {
  Button,
  shoppingButton,
};

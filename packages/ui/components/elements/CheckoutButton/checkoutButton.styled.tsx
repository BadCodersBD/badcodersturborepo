import styled from "styled-components";
import type { Buttoncolotype } from "./index"

type Props = {
    buttoncolor: Buttoncolotype;
  }

const CheckoutButton = styled.button<Props>`
    background-color: ${({buttoncolor})=> buttoncolor.backgroundColor};
    color: ${({buttoncolor})=> buttoncolor.textcolor};
    border: 1px solid red;
    padding: 0.5rem 1rem 0.5rem 1rem ;
    &:hover {
    background-color: ${({buttoncolor})=> buttoncolor.backgroundHoverColor};
  }
`;

export const Styled = {
    CheckoutButton
}
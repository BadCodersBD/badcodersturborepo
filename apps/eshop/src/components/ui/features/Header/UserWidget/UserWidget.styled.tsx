import styled from "styled-components";
import Link from "next/link";

const Url = styled(Link)`
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    border-width: 2px;
    border-color: #009C00;
    padding: 0.45rem;
    transition: 0.3s;
    &:hover {
    color: white;
    background-color: #009C00;
    box-shadow: none;
    transition: 0.3s;
  }
`;

export const Styled = {
    Url
}


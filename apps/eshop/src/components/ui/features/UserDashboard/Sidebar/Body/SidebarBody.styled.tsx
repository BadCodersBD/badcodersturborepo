import styled from "@emotion/styled";
import Link from "next/link";

type SideBarLinkProps = {
  active: boolean;
};

const ListItem = styled.div`
  color: #ffffff;
  margin: 0.5rem;
  h1 {
    font-size: 1rem;
    color: #ffffff;
  }
`;
const SidebarLink = styled(Link)<SideBarLinkProps>`
  background-color: #000000;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 600;
  &:hover {
    background-color: #10e2f1;
    color: #000000;
  }
`;

export const Styled = { ListItem, SidebarLink };

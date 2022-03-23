import React from "react";
import NavItem from "./navItem";
import { sideBar } from "../routes/index";
import styled from "styled-components";
export const NavContainer = styled.nav`
  padding-top: 20px;

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

function NavMenuComponent() {
  return (
    <NavContainer>
      <ul>
        {sideBar.map((link, i) => {
          return <NavItem key={i} link={link} />;
        })}
      </ul>
    </NavContainer>
  );
}

export default NavMenuComponent;

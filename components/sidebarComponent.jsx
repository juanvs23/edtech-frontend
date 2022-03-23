import React from "react";
import styled from "styled-components";
import { FunctionalsContent } from "../context/contextApi";
import NavMenuComponent from "./navMenuComponent";

export const Aside = styled.aside`
  height: calc(100% - 60px);
  position: fixed;
  left: 0;
  top: 0;
  bottom:0;
  background: var(--primary);
  margin-top: 60px;
  overflow: hidden;
  transition: 0.2s all;
  z-index:99;
  width: ${(props) => {
    if (props.openBar) {
      return "250px";
    } else {
      return "50px";
    }
  }};
  @media (max-width: 992px) {
    width: ${(props) => {
      if (props.openBar) {
        return "250px";
      } else {
        return "0px";
      }
    }};
  }
  .main-sidebar ul,
  .main-sidebar ul li {
    display: block;
  }
`;

const SidebarComponent = () => {
  const { openBar } = React.useContext(FunctionalsContent);
  return (
    <Aside className="main-sidebar" openBar={openBar}>
      <NavMenuComponent />
    </Aside>
  );
};

export default SidebarComponent;

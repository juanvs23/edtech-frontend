import React from "react";
import styled from "styled-components";
import { FunctionalsContent } from "../context/contextApi";

export const Main = styled.main`
  &.wrapper {
    
    margin-left: ${(props) => {
      if (props.openBar) {
        return "250px";
      } else {
        return "50px";
      }
    }};
    .container{
      
     
      padding: 0 15px;
    
      margin-top:70px;
    
      min-height:80vh;
    }
    transition: 0.2s all;
   
    min-height: calc(
      ${(props) => {
          return `${props.large.height}`;
        }} - 60px
    );
    @media (min-width:768px){
      margin:15px;
     }
    @media (max-width: 992px) {
      margin-left: 0;
    }
  }
`;

const MainContainer = (props) => {
  const { openBar, height } = React.useContext(FunctionalsContent);
  return (
    <Main className="wrapper" openBar={openBar} large={height}>
     <div className="container">
     {props.children}
     </div>
    </Main>
  );
};

export default MainContainer;

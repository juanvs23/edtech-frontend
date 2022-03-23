import React from "react";
import { createGlobalStyle } from "styled-components";
import { FunctionalsContent } from "../context/contextApi";

export const Style = createGlobalStyle`
:root {
  ${(props) => {
    if (props.mode === "light") {
      return props.theme.light.root;
    } else {
      return props.theme.dark.root;
    }
  }}
  }
}
  body,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden;
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: left;
    background-color:var(--base);
    color:var(--color-text);
    
  }

  
`;
const GlobalDefault = ({ theme }) => {
  const {
    darkMode: { className },
  } = React.useContext(FunctionalsContent);
  return <Style theme={theme} mode={className} />;
};
export default GlobalDefault;

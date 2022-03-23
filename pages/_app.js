import { ThemeProvider } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import FunctionalsProvider from "../context/contextApi";

import GlobalDefault from "./globalStyle";

const theme = {
  dark: {
    root: `
      
        --blue: #375a7f;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #e74c3c;
        --orange: #fd7e14;
        --yellow: #f39c12;
        --green: #00bc8c;
        --teal: #20c997;
        --cyan: #3498db;
        --white: #fff;
        --gray: #888;
        --gray-dark: #303030;
        --primary: #375a7f;
        --secondary: #444;
        --success: #00bc8c;
        --info: #3498db;
        --warning: #f39c12;
        --danger: #e74c3c;
        --light: #adb5bd;
        --dark: #303030;
        --base:#222;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --color-text:#fff;
        --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    
      `,
  },
  light: {
    root: `
      
      
        --blue: #2780e3;
        --indigo: #6610f2;
        --purple: #613d7c;
        --pink: #e83e8c;
        --red: #ff0039;
        --orange: #f0ad4e;
        --yellow: #ff7518;
        --green: #3fb618;
        --teal: #20c997;
        --cyan: #9954bb;
        --white: #fff;
        --gray: #868e96;
        --gray-dark: #373a3c;
        --primary: #2780e3;
        --secondary: #373a3c;
        --success: #3fb618;
        --info: #9954bb;
        --warning: #ff7518;
        --danger: #ff0039;
        --light: #f8f9fa;
        --dark: #373a3c;
        --base: #fff;
        --color-text:#373a3c;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  
    
      `,
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <FunctionalsProvider>
      <GlobalDefault theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FunctionalsProvider>
  );
}

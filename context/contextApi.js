import React, { createContext, useState } from "react";
// import firebase from '../config/firebase'

export const FunctionalsContent = createContext();

const FunctionalsProvider = ({ children }) => {
  // const [login,setLogin] = useState();
  const [auth, setAuth] = useState(false);
  const [openBar, setopenBar] = useState(false);
  const [titleContent, setTitleContent] = useState("index");
  const [darkMode, setDarkMode] = useState({ className: "light" });
  const [height, setHeight] = useState({ height: "600px" });
  const [formInputs, setFormInputs]= useState({})

  return (
    <FunctionalsContent.Provider
      value={{
        formInputs, setFormInputs,
        auth,
        setAuth,
        titleContent,
        setTitleContent,
        darkMode,
        setDarkMode,
        height,
        setHeight,
        openBar,
        setopenBar,
      }}
    >
      {children}
    </FunctionalsContent.Provider>
  );
};
export default FunctionalsProvider;

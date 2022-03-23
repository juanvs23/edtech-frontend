import React from "react";
import { FunctionalsContent } from "../context/contextApi";

const DarkButton = () => {
  const { darkMode, setDarkMode } = React.useContext(FunctionalsContent);
  const handleDarkMode = () => {
    if (darkMode.className === "light") {
      setDarkMode({ className: "dark" });
    } else {
      setDarkMode({ className: "light" });
    }
  };
  const mode = darkMode.className === "light" ? "fa-sun" : "fa-moon";
  const modeText = darkMode.className === "light" ? "Light" : "Dark";
  return (
    <div>
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {modeText} mode <i className={`fa ${mode}`}></i>
        </label>
        <input
          className="form-check-input"
          onClick={handleDarkMode}
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  );
};

export default DarkButton;

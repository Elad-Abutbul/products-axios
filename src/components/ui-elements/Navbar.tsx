import React, { useState, useEffect } from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <a href="/">
            <h1>Products</h1>
          </a>
        </div>
        <Button
          type="button"
          aria-label="Theme Switcher Button"
          className={`theme-toggle flex flex-jc-sb flex-ai-c ${
            isDarkMode ? "active" : ""
          }`}
          onClick={toggleDarkMode}
        >
          <i
            className={`fa-regular ${
              isDarkMode ? "fa-sun" : "fa-moon"
            } theme-icon`}
          ></i>
          <span className="theme-text">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

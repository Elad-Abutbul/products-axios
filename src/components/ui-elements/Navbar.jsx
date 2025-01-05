import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
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

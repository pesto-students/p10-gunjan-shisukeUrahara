import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <span>Switch Theme:</span>
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

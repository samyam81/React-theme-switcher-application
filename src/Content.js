// Content.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Content.css"; // Importing styles

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`content ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"} is Active</h1>
      <p>Switch between light and dark themes using the button above.</p>
    </div>
  );
}

export default Content;

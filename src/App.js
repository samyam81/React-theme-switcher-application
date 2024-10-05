import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;

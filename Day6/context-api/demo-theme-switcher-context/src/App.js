import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./styles.css"; // Ensure you have styles defined

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}> {/* Apply theme dynamically */}
      <h1>React Theme Switcher 🌗</h1>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default App;



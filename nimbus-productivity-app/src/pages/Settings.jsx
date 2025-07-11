import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [username, setUsername] = useState("User123");
  const [theme, setTheme] = useState("light");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`settings-container ${theme}`}>
      <h1 className="settings-heading">Settings</h1>

      <div className="settings-section">
        <h3>Profile Settings</h3>
        <label htmlFor="username">Change Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="settings-input"
        />
        <p className="preview">Preview: <strong>{username}</strong></p>
      </div>

      <div className="settings-section">
        <h3>Theme Settings</h3>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}
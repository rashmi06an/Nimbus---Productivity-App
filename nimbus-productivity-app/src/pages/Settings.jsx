import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

export default function Settings() {
  const [username, setUsername] = useState("User123");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`settings-container ${theme}`}>
      <h1 className="settings-heading">Settings</h1>

      {/* <div className="settings-section">
        <h3>Profile Settings</h3>
        <label htmlFor="username">Change Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="settings-input"
        />
        <p className="preview">
          Preview: <strong>{username}</strong>
        </p>
      </div> */}

      <div className="settings-section">
        <h3>Theme Settings</h3>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="settings-section">
        <h3>Account</h3>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
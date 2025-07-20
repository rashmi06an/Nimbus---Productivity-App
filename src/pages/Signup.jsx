// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (username && password) {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      if (existingUser && existingUser.username === username) {
        alert("User already exists. Please log in.");
        navigate("/login");
      } else {

        localStorage.setItem("user", JSON.stringify({ username, password }));
        alert("Signup successful! Please log in.");
        navigate("/login");
      }
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Choose Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Choose Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;

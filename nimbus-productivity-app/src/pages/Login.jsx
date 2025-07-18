import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple validation (in real-world, you should hash and secure this)
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p style={{ marginTop: "10px" }}>
  Don't have an account?{" "}
  <span
    style={{ color: "#007bff", cursor: "pointer" }}
    onClick={() => navigate("/signup")}
  >
    Sign up here
  </span>
</p>

    </div>
  );
}

export default Login;
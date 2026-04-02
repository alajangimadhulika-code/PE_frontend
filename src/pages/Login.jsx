import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      if (user && user.email) {
        navigate("/dashboard", { state: { user } });
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error", error);
      alert(error.message || "Invalid email or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <p>Enter your username and password</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          required
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <input
          type="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            backgroundColor: "green",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        New user? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error", error);
      alert(error.message || "Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Register</h2>
      <p>Create your account</p>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
          }}
        >
          Register
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;

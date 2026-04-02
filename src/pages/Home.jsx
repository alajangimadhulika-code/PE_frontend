import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: "#2c3e50", padding: "15px" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Placement Portal
        </h2>
      </div>

      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Placement Eligibility Analysis System</h1>
        <p>
          This system helps students check whether they are eligible for campus
          placements based on CGPA, backlogs, and skills.
        </p>

        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 25px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            marginTop: "20px",
          }}
        >
          Get Started
        </button>

        <h2 style={{ marginTop: "60px" }}>Eligibility Criteria</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <div style={{ backgroundColor: "#ddd", padding: "20px", width: "200px", borderRadius: "10px" }}>
            <h3>CGPA</h3>
            <p>Minimum CGPA should be 7.0</p>
          </div>

          <div style={{ backgroundColor: "#ddd", padding: "20px", width: "200px", borderRadius: "10px" }}>
            <h3>Backlogs</h3>
            <p>No active backlogs allowed</p>
          </div>

          <div style={{ backgroundColor: "#ddd", padding: "20px", width: "200px", borderRadius: "10px" }}>
            <h3>Skills</h3>
            <p>At least one technical skill required</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
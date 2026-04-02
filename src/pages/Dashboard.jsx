import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "Student";

  const [cgpa, setCgpa] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [skills, setSkills] = useState("");

  const checkEligibility = () => {
    if (cgpa >= 7 && backlogs == 0 && skills !== "") {
      alert("You are Eligible for Placement");
    } else {
      alert("You are Not Eligible for Placement");
    }
  };

  const eligibility = () => {
    if (Number(cgpa) >= 7 && Number(backlogs) === 0 && skills.trim() !== "") {
      return "Eligible";
    }
    return "Not Eligible";
  };

  const getImprovementTips = () => {
    const tips = [];

    if (Number(cgpa) < 7 || cgpa === "") {
      tips.push("Increase your CGPA to 7.0 or above with consistent study and strong project performance.");
    }

    if (Number(backlogs) > 0) {
      tips.push("Clear active backlog subjects as soon as possible and seek help from teachers/tutors.");
    }

    if (skills.trim() === "") {
      tips.push("Add technical skills to your profile, especially in Java, Python, SQL, and web frameworks.");
    }

    if (skills.trim() !== "") {
      const skillSet = skills.toLowerCase();
      if (!skillSet.includes("java") && !skillSet.includes("python") && !skillSet.includes("sql")) {
        tips.push("Learn in-demand skills like Java, Python, SQL, and cloud fundamentals.");
      }
    }

    tips.push("Practice mock interviews and build 2-3 projects emphasizing your tech stack.");

    return tips;
  };

  const status = eligibility();

  const improvementTips = status === "Not Eligible" ? getImprovementTips() : [];

  return (
    <div style={{ padding: "30px", fontFamily: "Segoe UI, Helvetica, Arial, sans-serif" }}>
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, color: "#0a7fa6" }}>Placement Dashboard</h1>
        <p style={{ margin: "8px 0", color: "#5f5f5f" }}>Hi {username}, track your eligibility and goals here.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "24px" }}>
        <div style={{ background: "#ffffff", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", borderRadius: "12px", padding: "18px" }}>
          <h4 style={{ margin: "0 0 10px", color: "#333" }}>Current CGPA</h4>
          <p style={{ margin: 0, fontSize: "1.9rem", color: "#0b68a9" }}>{cgpa || <span style={{ color: "#999" }}>0.0</span>}</p>
        </div>

        <div style={{ background: "#ffffff", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", borderRadius: "12px", padding: "18px" }}>
          <h4 style={{ margin: "0 0 10px", color: "#333" }}>Backlogs</h4>
          <p style={{ margin: 0, fontSize: "1.9rem", color: backlogs === "" ? "#999" : (Number(backlogs) === 0 ? "#0c9b68" : "#d9534f") }}>{backlogs || '0'}</p>
        </div>

        <div style={{ background: "#ffffff", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", borderRadius: "12px", padding: "18px" }}>
          <h4 style={{ margin: "0 0 10px", color: "#333" }}>Skillset</h4>
          <p style={{ margin: 0, color: "#0b77a6" }}>{skills ? skills : <span style={{ color: "#999" }}>No skills added</span>}</p>
        </div>

        <div style={{ background: "#ffffff", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", borderRadius: "12px", padding: "18px" }}>
          <h4 style={{ margin: "0 0 10px", color: "#333" }}>Eligibility Status</h4>
          <span style={{ display: "inline-block", padding: "8px 14px", borderRadius: "999px", background: status === "Eligible" ? "#d3f7e2" : "#fbe8e8", color: status === "Eligible" ? "#1a8a48" : "#ba2646", fontWeight: 600 }}>{status}</span>
        </div>
      </div>

      <div style={{ maxWidth: "550px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 18px rgba(0,0,0,0.08)", padding: "22px" }}>
        <h3 style={{ marginTop: 0, color: "#333" }}>Eligibility Calculator</h3>

        <label style={{ display: "block", textAlign: "left", color: "#555", marginBottom: "8px" }}>CGPA (0-10)</label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.01"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          style={{ width: "100%", padding: "11px", borderRadius: "8px", border: "1px solid #ced4da", marginBottom: "13px" }}
        />

        <label style={{ display: "block", textAlign: "left", color: "#555", marginBottom: "8px" }}>Backlogs</label>
        <input
          type="number"
          min="0"
          value={backlogs}
          onChange={(e) => setBacklogs(e.target.value)}
          style={{ width: "100%", padding: "11px", borderRadius: "8px", border: "1px solid #ced4da", marginBottom: "13px" }}
        />

        <label style={{ display: "block", textAlign: "left", color: "#555", marginBottom: "8px" }}>Skills (comma-separated)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g. Java, Spring Boot, SQL"
          style={{ width: "100%", padding: "11px", borderRadius: "8px", border: "1px solid #ced4da", marginBottom: "18px" }}
        />

        <button
          onClick={checkEligibility}
          style={{
            width: "100%",
            padding: "10px 14px",
            backgroundColor: "#0a7fa6",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Recalculate
        </button>

        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "10px 14px",
            marginTop: "10px",
            backgroundColor: "#e74c3c",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </div>

      {status === "Not Eligible" && (
        <section style={{ marginTop: "24px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto", background: "#fff7e6", border: "1px solid #ffde9e", padding: "16px", borderRadius: "10px" }}>
          <h3 style={{ color: "#a44", marginBottom: "12px" }}>Improvement Suggestions</h3>
          <p style={{ margin: "0 0 10px", color: "#555" }}>
            You are not yet eligible for placements. Focus on these improvements to increase your chances.
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
            {improvementTips.map((tip, idx) => (
              <li key={idx} style={{ marginBottom: "6px" }}>{tip}</li>
            ))}
          </ul>
          <p style={{ marginTop: "10px", color: "#333" }}><strong>Learning resources:</strong></p>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
            <li>Coursera: Java, Python, SQL, Data Structures courses</li>
            <li>Udemy: Full Stack Web Development (React/Spring Boot)</li>
            <li>freeCodeCamp: SQL, APIs, and algorithms</li>
            <li>LinkedIn Learning: Interview prep & communication skills</li>
          </ul>
        </section>
      )}

      <section style={{ marginTop: "24px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto", background: "#ecf8ff", border: "1px solid #a7d8ff", padding: "16px", borderRadius: "10px" }}>
        <h3 style={{ color: "#1a4f76", marginBottom: "10px" }}>Complete Your Placement Prep</h3>
        <ul style={{ margin: 0, paddingLeft: "20px", color: "#2f4f6f" }}>
          <li style={{ marginBottom: "6px" }}><strong>Resume:</strong> include summary, projects, skills, achievements, and contact info. Keep it one page.</li>
          <li style={{ marginBottom: "6px" }}><strong>Aptitude practice:</strong> solve percentile, logical reasoning, quantitative and verbal questions daily (e.g., IndiaBix, PrepInsta).</li>
          <li style={{ marginBottom: "6px" }}><strong>Profile building:</strong> use GitHub, LinkedIn, and portfolio website to show your projects and contributions.</li>
          <li style={{ marginBottom: "6px" }}><strong>Communication:</strong> practice spoken answers for common interview questions; record yourself and improve clarity and confidence.</li>
        </ul>
      </section>

      <section style={{ marginTop: "24px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
        <h3 style={{ color: "#333", marginBottom: "14px" }}>Recommended Companies</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px" }}>
          {[
            { name: "TechNova", ctc: "₹12 LPA", criteria: "CGPA 7.5+, no backlogs" },
            { name: "DataEdge", ctc: "₹11 LPA", criteria: "CGPA 7.0+, SQL/ML skill" },
            { name: "InnoSoft", ctc: "₹10 LPA", criteria: "CGPA 6.5+, >=2 skills" },
            { name: "CloudWorks", ctc: "₹13 LPA", criteria: "CGPA 8.0+, cloud skill" },
          ].map((c, i) => (
            <div key={i} style={{ background: "#fafafa", borderRadius: "10px", border: "1px solid #d3d3d3", padding: "14px" }}>
              <h4 style={{ margin: "0 0 8px", color: "#0a7fa6" }}>{c.name}</h4>
              <p style={{ margin: "0 0 6px", fontWeight: 600 }}>CTC: {c.ctc}</p>
              <p style={{ margin: 0, color: "#555" }}>{c.criteria}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
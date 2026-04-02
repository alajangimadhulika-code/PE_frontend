const API_URL = "http://localhost:8080/api";

// Register
export const registerUser = async (name, email, password, role = "student") => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, role }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Register failed: ${response.statusText} ${text}`);
  }

  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

// Login
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const text = await response.text();
    if (response.status === 401) {
      throw new Error("Invalid email or password");
    }
    throw new Error(`Login failed: ${response.statusText} ${text}`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!data || !data.email) {
    throw new Error("Invalid email or password");
  }

  return data;
};

// Get all students
export const getAllStudents = async () => {
  const response = await fetch(`${API_URL}/students`);
  if (!response.ok) {
    throw new Error(`Failed to fetch students: ${response.statusText}`);
  }
  return response.json();
};

// Get eligible students
export const getEligibleStudents = async () => {
  const response = await fetch(`${API_URL}/students/eligible`);
  if (!response.ok) {
    throw new Error(`Failed to fetch eligible students: ${response.statusText}`);
  }
  return response.json();
};
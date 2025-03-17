import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const fetchDashboard = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first");

    try {
      const res = await axios.get("http://localhost:5000/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message);
    } catch (error) {
      alert("Access Denied");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={fetchDashboard}>Access Protected Content</button>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { Login } = useAuth(); // Use Login function from AuthContext

  const handleLogin = () => {
    Login(); // Call Login function instead of setAuth
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

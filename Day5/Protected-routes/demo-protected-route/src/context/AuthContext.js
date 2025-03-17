import React, { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  const Logout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth: setIsAuthenticated, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using Authentication Context
export const useAuth = () => useContext(AuthContext);


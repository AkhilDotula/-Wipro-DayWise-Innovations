import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated === null) return <h2>Loading...</h2>; // Handle loading state
  return isAuthenticated ? children : <Navigate to="/login" />;
};


export default ProtectedRoute;
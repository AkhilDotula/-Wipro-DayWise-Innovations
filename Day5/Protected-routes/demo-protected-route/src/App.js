import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoutes";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Settings from "./Pages/Settings";
import UserProfile from "./Pages/UserProfile";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

const Profile = lazy(() => import("./Pages/Profiles")); // Corrected filename

function App() { 
  const isAuthenticated = true; 

  return ( 
    <Router> 
      <AuthProvider>
        <nav> 
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/dashboard">Dashboard</Link>
        </nav> 
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:id" element={<UserProfile />} /> 

            <Route path="/dashboard" element={ 
              <ProtectedRoute isAuthenticated={isAuthenticated}> 
                <Dashboard /> 
              </ProtectedRoute> 
            } /> 

            <Route path="/dashboard/profile" element={ 
              <ProtectedRoute isAuthenticated={isAuthenticated}> 
                <Profile /> 
              </ProtectedRoute> 
            } />
            <Route path="/dashboard/settings" element={ 
              <ProtectedRoute isAuthenticated={isAuthenticated}> 
                <Settings /> 
              </ProtectedRoute> 
            } />
            
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router> 
  ); 
} 

export default App;

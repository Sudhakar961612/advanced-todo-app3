import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={isRegistering ? <RegisterPage toggleForm={toggleForm} /> : <LoginPage toggleForm={toggleForm} />} />
        <Route path='/login' element={<LoginPage toggleForm={toggleForm} />} />
        <Route path='/home' element={isAuthenticated ? <HomePage /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  );
};

export default App;

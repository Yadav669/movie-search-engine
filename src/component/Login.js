import React, { useState } from "react";
import "../assets/css/Login.css"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    if (email) {
      localStorage.setItem("userEmail", email); 
      const userWatchlist = localStorage.getItem(email) || JSON.stringify([]); 
      localStorage.setItem("watchlist", userWatchlist);
      setLoggedIn(true);
      navigate("/home"); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("watchlist"); 
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-box">
          <h2>Login or Create an Account</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            className="email-input"
          />
          <button onClick={handleLogin} className="login-button">
            Log In / Create Account
          </button>
        </div>
      ) : (
        <div className="logout-box">
          <h2>Welcome, {email}</h2>
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;

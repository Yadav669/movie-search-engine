import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { RiLogoutBoxLine } from "react-icons/ri";
import "../assets/css/search.css"

const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Logic for logout, if any
    localStorage.removeItem("userEmail"); 
    navigate("/"); 
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Master Movies</h2>
      </div>
      <div className={`Pages ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="Logout" onClick={handleLogout}>
            <RiLogoutBoxLine size={20} />
          </li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default Search;

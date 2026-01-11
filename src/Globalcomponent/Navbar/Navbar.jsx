import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>LMS</h2>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search courses..."
        />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Ai">Ai Chatbox</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  





  )
}

export default Navbar
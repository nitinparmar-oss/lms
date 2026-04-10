import React from 'react'
import "./style.css"
import { Bot, Search } from "lucide-react";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
        <header className="nav-wrapper">
      <nav className="nav-glass">

        {/* BRAND */}
        <div className="nav-brand">
          <span className="brand-icon">⚡</span>
          <div>
            <h1>Learning Management System</h1>
            <p>AI Learning Platform</p>
          </div>
        </div>

        {/* NAV LINKS */}
        <ul className="nav-center">
  <li className="active"><NavLink to ="/">Home</NavLink></li>
  <li><NavLink to="/courses">Courses</NavLink></li>
  <li><NavLink to="/portfolio">Portfolio</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>
        {/* ACTIONS */}
        <div className="nav-actions">
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search anything..." />
          </div>

          <button className="ai-cta">
            <Bot size={18} />
           <a href="/Ai">AI ChatBox</a>
            <span className="pulse-dot"></span>
          </button>
        </div>

      </nav>
    </header>
 





  )
}

export default Navbar
import React from 'react'
import "./style.css"
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">

    
    <div className="footer-box">
      <h2 className="logo">LEARNING MANAGEMENT SYSTEM</h2>
      <p>
        We build modern web solutions to help learners  grow
        faster with smart and scalable technology.
      </p>
    </div>

    
    <div className="footer-box">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    
    <div className="footer-box">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>

    <div className="footer-box">
      <h3>Contact</h3>
      <p>Email: support@yourbrand.com</p>
      <p>Phone: ‪+91 98765 43210‬</p>

      <div className="social-icons">
        <a href="#">🌐</a>
        <a href="#">🐦</a>
        <a href="#">📘</a>
        <a href="#">📸</a>
      </div>
    </div>

  </div>


  <div className="footer-bottom">
    <p>© 2026 Learning Management System. All Rights Reserved.</p>
  </div>
</footer>
  )
}

export default Footer
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">
              <Cloud className="icon-white" />
            </div>
            <span className="brand-name">Nimbus</span>
          </div>
          <p className="footer-description">
            Smart Task & Time Tracker that helps you boost productivity and manage your time effectively.
          </p>
          <div className="social-icons">
            <a href="#"><Github className="icon-white" /></a>
            <a href="#"><Twitter className="icon-white" /></a>
            <a href="#"><Mail className="icon-white" /></a>
          </div>
        </div>

        {/* Features */}
        <div className="footer-column">
          <h3 className="footer-title">Features</h3>
          <ul className="footer-links">
            <li><a href="#">Task Management</a></li>
            <li><a href="#">Time Tracking</a></li>
            <li><a href="#">Pomodoro Timer</a></li>
            <li><a href="#">Productivity Reports</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Nimbus. All rights reserved.</p>
      </div>
    </div>
  </footer>

  );
}
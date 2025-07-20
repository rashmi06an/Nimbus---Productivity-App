import React from "react";
import { Cloud, Github, Twitter, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Cloud className="icon-white logo-icon" />
              <span className="brand-name">Nimbus</span>
            </div>
            <p className="footer-description">
              Smart Task & Time Tracker that helps you boost productivity and manage your time effectively.
            </p>
            <div className="social-icons">
              
              
              <a href="#" aria-label="Twitter"><Twitter className="icon-white" /></a>
              <a href="#" aria-label="Email"><Mail className="icon-white" /></a>
            </div>
          </div>

          {/* Features Column */}
          <div className="footer-column">
            <h3 className="footer-title">Features</h3>
            <ul className="footer-links">
              <li><a href="/Tasks">Task Management</a></li>
              <li><a href="/Timer">Time Tracking</a></li>
              <li><a href="/Reports">Productivity Reports</a></li>
            </ul>
          </div>


        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>&copy; 2025 Nimbus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

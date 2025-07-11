import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nimbus</div>
      <ul className="nav-links">
        <li><Link to="/"><h4>Home</h4></Link></li>
        <li><Link to="/tasks"><h4>Tasks</h4></Link></li>
        <li><Link to="/timer"><h4>Timer</h4></Link></li>
        <li><Link to="/notes"><h4>Notes</h4></Link></li>
        <li><Link to="/about"><h4>About</h4></Link></li>
        <li><Link to="/Reports"><h4>Reports</h4></Link></li>
        <li><Link to="/Settings"><h4>Settings</h4></Link></li>



        
      </ul>
    </nav>
  );
}
// src/pages/Home.js
import React from "react";
import "./Page.css";
import homeImage from "../assets/HomePage.png";
import { Link } from "react-router-dom";

function Home() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      feedback: "FocusFlow helped me stay organized and on track with my studies!",
    },
    {
      name: "Rohan Verma",
      feedback: "A great all-in-one tool for managing my day-to-day tasks and notes.",
    },
    {
      name: "Priya Kapoor",
      feedback: "Simple, clean, and effective. It's part of my daily routine now.",
    },
  ];

  return (
    <div className="page home">
      <div className="hero">
        <h1 className="hero-title">Welcome to FocusFlow</h1>
        <p className="hero-subtitle">Your all-in-one productivity companion.</p>
        <div className="hero-buttons">
          <Link to={"/tasks"}><button className="primary-btn">Get Started</button></Link>
          <button className="secondary-btn">Learn More</button>
        </div>
        <div className="home-image-container">
          <img src={homeImage} alt="Home illustration" className="home-image" />
        </div>
      </div>

      <div className="testimonials">
        <h2 className="section-title">What our users say</h2>
        <div className="testimonial-list">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-feedback">"{item.feedback}"</p>
              <p className="testimonial-name">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

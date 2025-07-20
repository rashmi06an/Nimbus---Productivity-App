import React, { useEffect, useState } from "react";
import "./home.css";
import homeImage from "../assets/HomePage.png";
import { Link } from "react-router-dom";

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);



  return (
    <div className="pagehome">
      <div className="hero">
        <h1 className="mainline">Boost Your Productivity with Nimbus</h1>
        <p className="subtitle">
          The ultimate smart task and time tracker that helps you manage your
          work efficiently, track your time precisely, and boost your
          productivity with intelligent insights.
        </p>
        <div className="hero-buttons">
          <Link to={"/tasks"}>
            <button className="primary-btn">Get Started</button>
          </Link>
          <Link to={"/about"}>
            <button className="secondary-btn">Learn More</button>
          </Link>
        </div>
        <div className="home-image-container">
          <img src={homeImage} alt="Home illustration" className="home-image" />
        </div>
      </div>

      <section className="features-section">
        <div className="features-header">
          <h2>Powerful Features for Maximum Productivity</h2>
          <p>
            Everything you need to manage tasks, track time, and boost your
            productivity in one beautiful app.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box blue">✔️</div>
            <h3>Smart Task Management</h3>
            <p>
              Organize your tasks with priorities, categories, and smart
              filtering.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box purple">⏱️</div>
            <h3>Precise Time Tracking</h3>
            <p>Track time spent on tasks with detailed logs and analytics.</p>
          </div>

          <div className="feature-card">
            <div className="icon-box green">🧠</div>
            <h3>Pomodoro Timer</h3>
            <p>
              Boost focus with customizable work sessions and break intervals.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box orange">📊</div>
            <h3>Productivity Reports</h3>
            <p>
              Visualize your productivity with charts and detailed insights.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>What Our Users Say</h2>
          <p>
            Join thousands of professionals who trust Nimbus for their
            productivity needs.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <blockquote>
              "Nimbus has revolutionized how I manage my daily tasks. The time
              tracking feature is incredibly accurate."
            </blockquote>
            <div className="user-info">
              <div className="avatar">SJ</div>
              <div>
                <div className="user-name">Sarah Johnson</div>
                <div className="user-role">Product Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <blockquote>
              "The Pomodoro timer integration is perfect. I’ve increased my
              productivity by 40% since using Nimbus."
            </blockquote>
            <div className="user-info">
              <div className="avatar">MC</div>
              <div>
                <div className="user-name">Michael Chen</div>
                <div className="user-role">Software Developer</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <blockquote>
              "The reporting features help me track billable hours effortlessly.
              Essential for my business."
            </blockquote>
            <div className="user-info">
              <div className="avatar">ER</div>
              <div>
                <div className="user-name">Emily Rodriguez</div>
                <div className="user-role">Freelancer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
<div><h2 className="blank">.</h2></div>
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Transform Your Productivity?</h2>
          <p>
            Join thousands of professionals who have already boosted their
            productivity with Nimbus.
          </p>
          <a href="/tasks" className="cta-button">
            Start Your Journey →
          </a>
        </div>
      </section>
        </div>
  
  );
}

export default Home;
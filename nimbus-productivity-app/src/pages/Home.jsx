import React from "react";
import "./home.css";
import homeImage from "../assets/HomePage.png";
import { Link } from "react-router-dom";

function Home() {
  const testimonials = [ ];
  return (
   
    <div className="pagehome">
      <div className="hero">
      <h1 className="mainline">
              <h1>Boost Your Productivity with Nimbus </h1>
              <div>
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <h1></h1>
              </span>
              </div>
              </h1>    
        <h3><p className="subtitle">The ultimate smart task and time tracker that helps you manage your work efficiently, track your time precisely, and boost your productivity with intelligent insights.
</p></h3>
        <div className="hero-buttons">
          <Link to={"/tasks"}><button className="primary-btn">Get Started</button></Link>
          <Link to={"/about"}><button className="secondary-btn">Learn More</button></Link>
        </div>
        <div className="home-image-container">
          <img src={homeImage} alt="Home illustration" className="home-image" />
        </div>
      </div>
      <section class="features-section">
  <div class="features-header">
    <h2>Powerful Features for Maximum Productivity</h2>
    <p>Everything you need to manage tasks, track time, and boost your productivity in one beautiful app.</p>
  </div>

  <div class="features-grid">
    <div class="feature-card">
      <div class="icon-box blue">✔️</div>
      <h3>Smart Task Management</h3>
      <p>Organize your tasks with priorities, categories, and smart filtering.</p>
    </div>

    <div class="feature-card">
      <div class="icon-box purple">⏱️</div>
      <h3>Precise Time Tracking</h3>
      <p>Track time spent on tasks with detailed logs and analytics.</p>
    </div>

    <div class="feature-card">
      <div class="icon-box green">🧠</div>
      <h3>Pomodoro Timer</h3>
      <p>Boost focus with customizable work sessions and break intervals.</p>
    </div>

    <div class="feature-card">
      <div class="icon-box orange">📊</div>
      <h3>Productivity Reports</h3>
      <p>Visualize your productivity with charts and detailed insights.</p>
    </div>
  </div>
</section>
<section class="testimonials-section">
  <div class="testimonials-header">
    <h2>What Our Users Say</h2>
    <p>Join thousands of professionals who trust Nimbus for their productivity needs.</p>
  </div>

  <div class="testimonials-grid">
    <div class="testimonial-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <blockquote>"Nimbus has revolutionized how I manage my daily tasks. The time tracking feature is incredibly accurate."</blockquote>
      <div class="user-info">
        <div class="avatar">SJ</div>
        <div>
          <div class="user-name">Sarah Johnson</div>
          <div class="user-role">Product Manager</div>
        </div>
      </div>
    </div>

    <div class="testimonial-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <blockquote>"The Pomodoro timer integration is perfect. I’ve increased my productivity by 40% since using Nimbus."</blockquote>
      <div class="user-info">
        <div class="avatar">MC</div>
        <div>
          <div class="user-name">Michael Chen</div>
          <div class="user-role">Software Developer</div>
        </div>
      </div>
    </div>

    <div class="testimonial-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <blockquote>"The reporting features help me track billable hours effortlessly. Essential for my business."</blockquote>
      <div class="user-info">
        <div class="avatar">ER</div>
        <div>
          <div class="user-name">Emily Rodriguez</div>
          <div class="user-role">Freelancer</div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="name"><h2 className="noname">.</h2></div>
<section class="cta-section">
  <div class="cta-container">
    <h2>Ready to Transform Your Productivity?</h2>
    <p>Join thousands of professionals who have already boosted their productivity with Nimbus.</p>
    <a href="/tasks" class="cta-button">
      Start Your Journey →
    </a>
  </div>
</section>

      <div className="testimonials">
        <h2 className="section-title"></h2>
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
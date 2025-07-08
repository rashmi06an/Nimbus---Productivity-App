import React from "react";
import "./Page.css";

function About() {
  return (
    <div className="about-page">
    <section class="about">
    <h2>About <span class="highlight">Nimbus</span></h2>
    <p>
      We believe that better time management leads to better work-life balance.
      Nimbus is designed to help you understand your work patterns, optimize
      your productivity, and achieve your goals mcdore efficiently.
    </p>
  </section>
  <section class="features">
    <h3>Why Choose Nimbus?</h3>
    <p>Built for modern professionals who want to take control of their time and boost their productivity</p>  
    <div class="feature-grid">
      <div class="feature">
        <div class="icon">⏱️</div>
        <h4>Smart Time Tracking</h4>
        <p>Track time automatically with intelligent categorization and insights.</p>
      </div>
      <div class="feature">
        <div class="icon">📋</div>
        <h4>Task Management</h4>
        <p>Organize tasks with priorities, due dates, and progress tracking.</p>
      </div>
      <div class="feature">
        <div class="icon">📊</div>
        <h4>Analytics & Reports</h4>
        <p>Visualize productivity patterns with detailed charts and metrics.</p>
      </div>
      <div class="feature">
        <div class="icon">⏳</div>
        <h4>Focus Timer</h4>
        <p>Pomodoro technique integration for enhanced concentration.</p>
        </div>
    </div>
  </section>
  <section class="mission">
    <h3>Our Mission</h3>
    <p>
      At Nimbus, we're on a mission to transform how people manage their time and tasks. We believe that with the right tools and insights, everyone can achieve better work-life balance and accomplish their goals more effectively.
    </p>
    <p>
      Our platform combines intelligent time tracking, intuitive task management, and powerful analytics to give you complete visibility into your productivity patterns. Whether you're a freelancer, team lead, or executive, Nimbus adapts to your workflow.
    </p>
  </section>
  <section className="productivity-tips">
  <h2>Productivity Tips</h2>
  <p className="subtitle">
    Expert strategies to help you get the most out of your time and achieve your goals
  </p>

  <div className="tips-grid">

    <div className="tip-card">
      <h3>💡 Time Blocking</h3>
      <p>Allocate specific time blocks for different types of work to maintain focus and reduce task switching.</p>
      <div className="tip-pro">
        <strong>📌 Pro Tip:</strong> Schedule your most important work during your peak energy hours.
      </div>
    </div>

    <div className="tip-card">
      <h3>⏱️ The 2-Minute Rule</h3>
      <p>If a task takes less than 2 minutes to complete, do it immediately rather than adding it to your to-do list.</p>
      <div className="tip-pro">
        <strong>📌 Pro Tip:</strong> This prevents small tasks from accumulating and becoming overwhelming.
      </div>
    </div>
    <div className="tip-card">
      <h3>📘 Single-Tasking</h3>
      <p>Focus on one task at a time rather than multitasking, which can reduce productivity by up to 40%.</p>
    </div>

    <div className="tip-card">
      <h3>🪞 Review & Reflect</h3>
      <p>Regularly review your productivity patterns and adjust your approach based on what works best.</p>
    </div>

  </div>
</section>
        </div>
  );
}

export default About;
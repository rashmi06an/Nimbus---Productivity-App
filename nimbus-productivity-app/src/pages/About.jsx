import React from "react";
import "./Page.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Nimbus</h1>
        <p>
          FocusFlow is a powerful productivity tool designed to help you manage
          tasks, track time, and boost your efficiency with insightful analytics.
        </p>
      </section>

      <section className="about-body">
        <h2>Why we built Nimbus</h2>
        <p>
          In today's fast-paced digital world, staying productive and managing
          time effectively has become more important than ever. Nimbus was
          built to provide a clean and simple way to organize your workday,
          manage tasks, track how you use your time, and stay focused.
        </p>
        <p>
          Our goal is to help individuals and teams reclaim their time, stay
          mindful of their priorities, and feel in control — without overwhelm.
        </p>
        <p>
          Nimbus combines minimal design with powerful tools like Pomodoro
          timers, daily task lists, and analytics so you can work smarter, not harder.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">

          <div className="feature-card">
            <h3>Smart Task Management</h3>
            <p>Create, organize, and prioritize tasks with ease.</p>
            <ul>
              <li>Task prioritization with visual indicators</li>
              <li>Custom tags for flexible organization</li>
              <li>Due date tracking and reminders</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Effective Time Tracking</h3>
            <p>Track time spent on tasks with a single click.</p>
            <ul>
              <li>One-click time tracking for any task</li>
              <li>Detailed time logs and history</li>
              <li>Pomodoro timer for focused work sessions</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Insightful Analytics</h3>
            <p>Visualize your productivity patterns with reports.</p>
            <ul>
              <li>Visual time distribution by task and tag</li>
              <li>Identify trends and improvements</li>
              <li>Celebrate progress visually</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Smart Notes</h3>
            <p>Capture and organize your ideas with ease.</p>
            <ul>
              <li>Rich text editing capabilities</li>
              <li>Tag-based organization system</li>
              <li>Full-text search</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
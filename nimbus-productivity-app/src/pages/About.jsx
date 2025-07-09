import React from "react";
import "./about.css";

function About() {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>About Nimbus</title>
      <link rel="stylesheet" href="about.css"/>
    </head>
    <body>
    
  
      <section class="hero">
        <h1>About Nimbus</h1>
        <p class="subtext">Nimbus is a powerful productivity tool designed to help you manage tasks, track time, and boost your efficiency with insightful analytics.</p>
      </section>
    
    
      <section class="overview">
        <h2 className="name">Why We Built Nimbus</h2>
        <div class="content">
          
          <p>In today's fast-paced digital world, staying productive and managing time effectively has become more challenging than ever. We created Nimbus to address this challenge by providing a seamless, intuitive platform that combines task management, time tracking, and productivity analytics in one unified experience.</p>
          <p>Our mission is to help individuals and teams reclaim their time, focus on what matters most, and achieve their goals with less stress and more clarity. We believe that productivity shouldn't feel overwhelming—it should feel empowering.</p>
          <p>Nimbus was designed with a focus on simplicity and effectiveness. We've carefully crafted each feature to ensure it adds real value to your workflow without unnecessary complexity.</p>
          
        </div>
      </section>
      <section class="key-features-section">
    <h2><h2 class="section-title">Key Features</h2></h2>
    <div class="features-grid">
 
      <div class="feature-card">
        <div class="feature-icon blue">✔️</div>
        <h3 class="feature-title">Smart Task Management</h3>
        <p class="feature-desc">
          Create, organize, and prioritize tasks with ease. Add due dates, tags, and descriptions.
        </p>
        <ul class="feature-list">
          <li>Task prioritization with visual indicators</li>
          <li>Custom tags for flexible organization</li>
          <li>Due date tracking and reminders</li>
        </ul>
      </div>

  
      <div class="feature-card">
        <div class="feature-icon green">⏰</div>
        <h3 class="feature-title">Effective Time Tracking</h3>
        <p class="feature-desc">
          Track time spent on tasks with a click. Use the built-in Pomodoro timer.
        </p>
        <ul class="feature-list">
          <li>One-click time tracking for any task</li>
          <li>Detailed time logs and history</li>
          <li>Pomodoro timer for focus</li>
        </ul>
      </div>

  
      <div class="feature-card">
        <div class="feature-icon purple">📊</div>
        <h3 class="feature-title">Insightful Analytics</h3>
        <p class="feature-desc">
          Visualize productivity patterns. Spot trends and celebrate progress.
        </p>
        <ul class="feature-list">
          <li>Visual time distribution</li>
          <li>Productivity trends over time</li>
          <li>Completion rate analysis</li>
        </ul>
      </div>

 
      <div class="feature-card">
        <div class="feature-icon orange">🧠</div>
        <h3 class="feature-title">Smart Notes</h3>
        <p class="feature-desc">
          Capture ideas and info. Organize with tags and full-text search.
        </p>
        <ul class="feature-list">
          <li>Rich text editing</li>
          <li>Tag-based organization</li>
          <li>Powerful note search</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="productivity-section">
    <div class="container">
      <div className="title"><h2>Productivity Tips</h2></div>

      <div class="tips-container">

        <div class="tip-card">
          <h3>The Pomodoro Technique</h3>
          <p>The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Here's how to use it effectively:</p>
          <ol>
            <li>Choose a task to work on</li>
            <li>Set the Pomodoro timer for 25 minutes</li>
            <li>Work on the task until the timer rings</li>
            <li>Take a short break (5 minutes)</li>
            <li>After four pomodoros, take a longer break (15–30 minutes)</li>
          </ol>
        </div>

 
        <div class="tip-card">
          <h3>Task Prioritization</h3>
          <p>Not all tasks are created equal. Use these strategies to prioritize effectively:</p>
          <ul>
            <li>Use the Eisenhower Matrix to categorize tasks</li>
            <li>Start your day with the most important task (eat the frog)</li>
            <li>Limit your daily to-do list to 3–5 tasks</li>
            <li>Re-evaluate your priorities regularly</li>
          </ul>
        </div>

  
        <div class="tip-card">
          <h3>Time Blocking</h3>
          <p>Time blocking involves dedicating specific time periods to certain tasks or types of work:</p>
          <ul>
            <li>Plan your day or week in advance</li>
            <li>Group similar tasks together</li>
            <li>Include buffer time for unexpected issues</li>
            <li>Be realistic about time estimates</li>
            <li>Schedule breaks and downtime deliberately</li>
          </ul>
        </div>
        
      </div>

      
    </div>
  </section>
  
<div className="blue">
  <div class="join-section">
    <h3 class="join-title">Join Us on This Journey</h3>
    <p class="join-description">
      We're just getting started and have big plans for the future of Nimbus. We'd love to hear your
      feedback, suggestions, and stories about how Nimbus helps you be more productive.
    </p>
    <a href="/tasks" class="join-button">Start Using Nimbus</a>
  </div>
  <div className="blue">.</div>
  </div> 

  
    
    </body>
    </html>
    
  );
}

export default About;
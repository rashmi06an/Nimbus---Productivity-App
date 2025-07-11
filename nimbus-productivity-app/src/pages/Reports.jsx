import React from "react";
import "./Reports.css";
import reportData from "../data/sampleReportData";

export default function Reports() {
  // Calculate totals
  const totalTasks = reportData.reduce((sum, day) => sum + day.tasks, 0);
  const totalHours = reportData.reduce((sum, day) => sum + day.hours, 0);
  const productivityScore = totalTasks * totalHours;

  return (
    <div className="reports-container">
      <h1 className="reports-heading">Your Weekly Report</h1>

      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>
        <div className="summary-card">
          <h3>Total Hours</h3>
          <p>{totalHours.toFixed(1)}</p>
        </div>
        <div className="summary-card">
          <h3>Productivity Score</h3>
          <p>{Math.round(productivityScore)}</p>
        </div>
      </div>

      <div className="chart-section">
        <h2>Productivity Overview</h2>
        <div className="chart-bars">
          {reportData.map((item, index) => (
            <div className="bar-group" key={index}>
              <div
                className="bar tasks-bar"
                style={{ height: `${item.tasks * 15}px` }}
                title={`${item.tasks} tasks`}
              ></div>
              <div
                className="bar hours-bar"
                style={{ height: `${item.hours * 15}px` }}
                title={`${item.hours} hours`}
              ></div>
              <p className="bar-label">{item.date.slice(5)}</p>
            </div>
          ))}
        </div>
        <div className="bar-legend">
          <div><span className="legend tasks"></span> Tasks</div>
          <div><span className="legend hours"></span> Hours</div>
        </div>
      </div>
    </div>
  );
}
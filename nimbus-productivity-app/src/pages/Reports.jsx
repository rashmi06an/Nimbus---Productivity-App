import React, { useEffect, useState } from "react";
import "./Reports.css";
import { storage } from "../utils/storage";
import { isThisWeek } from "../utils/time";

export default function Reports() {
  const [reportData, setReportData] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    const refreshReport = () => {
      const tasks = storage.getTasks();
      const sessions = storage.getPomodoroSessions();

      const tasksCompleted = tasks.filter(
        (task) => task.completedAt && isThisWeek(new Date(task.completedAt))
      );

      const weeklySessions = sessions.filter(
        (session) => session.endTime && isThisWeek(new Date(session.endTime))
      );

      const totalTasks = tasksCompleted.length;
      const totalMinutes = weeklySessions.reduce(
        (sum, s) => sum + (s.duration || 0),
        0
      );
      const totalHours = totalMinutes / 60;

      // Prepare bar chart data
      const chartMap = {};

      weeklySessions.forEach((session) => {
        const dateKey = new Date(session.endTime).toISOString().slice(0, 10);
        if (!chartMap[dateKey]) {
          chartMap[dateKey] = { date: dateKey, tasks: 0, hours: 0 };
        }
        chartMap[dateKey].hours += session.duration / 60;
      });

      tasksCompleted.forEach((task) => {
        const dateKey = new Date(task.completedAt).toISOString().slice(0, 10);
        if (!chartMap[dateKey]) {
          chartMap[dateKey] = { date: dateKey, tasks: 0, hours: 0 };
        }
        chartMap[dateKey].tasks += 1;
      });

      const chartData = Object.values(chartMap).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      setTotalTasks(totalTasks);
      setTotalHours(totalHours);
      setReportData(chartData);
    };

    // Run once on mount
    refreshReport();

    // Refresh every 2 seconds (real-time)
    const interval = setInterval(refreshReport, 2000);

    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);

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
        <h2 className="productivity">Productivity Overview</h2>
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
                title={`${item.hours.toFixed(1)} hours`}
              ></div>
              <p className="bar-label">{item.date.slice(5)}</p>
            </div>
          ))}
        </div>
        <div className="bar-legend">
          <div>
            <span className="legend tasks"></span> Tasks
          </div>
          <div>
            <span className="legend hours"></span> Hours
          </div>
        </div>
      </div>
    </div>
  );
}
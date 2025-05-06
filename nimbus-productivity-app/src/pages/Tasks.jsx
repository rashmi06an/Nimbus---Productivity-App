// src/pages/Tasks.js
import React, { useState } from "react";
import "./Page.css";

function Tasks() {
  const [tasks, setTasks] = useState(["Complete homepage UI", "Plan notes feature"]);

  return (
    <div className="page tasks">
      <h1>Task Manager</h1>
      <p className="page-subtitle">Organize your tasks efficiently.</p>

      <div className="task-input-group">
        <input type="text" placeholder="Add a new task..." />
        <button className="primary-btn">Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

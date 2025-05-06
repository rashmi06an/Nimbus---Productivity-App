import React, { useState } from "react";
import "./Page.css";

function Tasks() {
  const [tasks, setTasks] = useState(["Task 01", "Task 02"]);

  return (
    <div className="page tasks">
      <h1>Task Manager</h1>
      <p className="page-subtitle">Stay on task, stay on track.</p>

      <div className="task-input-group">
        <input type="text" placeholder="Add a new task..." />
        <button className="primary_button">Add Task</button>
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
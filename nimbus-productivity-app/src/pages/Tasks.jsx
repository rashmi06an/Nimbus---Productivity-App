import React, { useState } from "react";
import "./Page.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    text: "",
    description: "",
    priority: "Medium",
    category: "",
  });

  const openModal = () => {
    setEditingIndex(null);
    setForm({ text: "", description: "", priority: "Medium", category: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveTask = () => {
    if (form.text.trim()) {
      if (editingIndex !== null) {
        const updated = [...tasks];
        updated[editingIndex] = { ...updated[editingIndex], ...form };
        setTasks(updated);
      } else {
        setTasks([...tasks, { ...form, done: false }]);
      }
      closeModal();
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    const task = tasks[index];
    setForm({
      text: task.text,
      description: task.description,
      priority: task.priority,
      category: task.category,
    });
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="page tasks">
      <h1>Task Manager</h1>
      <p className="page-subtitle">Stay on task, stay on track.</p>

      <button className="primary_button" onClick={openModal}>Add Task</button>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(index)}
            />
            <div className="task-details">
              <span
                className="task-text"
                style={{
                  textDecoration: task.done ? "line-through" : "none",
                  color: task.done ? "gray" : "inherit",
                }}
              >
                <strong>{task.text}</strong>
              </span>
              <p className="task-description">{task.description}</p>
              <div className="task-meta">
                <span className="task-category">{task.category}</span>
                <span
                  className="task-priority"
                  style={{
                    color:
                      task.priority === "High"
                        ? "red"
                        : task.priority === "Medium"
                        ? "orange"
                        : "green",
                  }}
                >
                  {task.priority}
                </span>
              </div>
            </div>
            <div className="task-actions">
              <button onClick={() => editTask(index)} className="edit-button">Edit</button>
              <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingIndex !== null ? "Edit Task" : "Add Task"}</h2>

            <input
              name="text"
              placeholder="Task Title"
              value={form.text}
              onChange={handleFormChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              rows="3"
              value={form.description}
              onChange={handleFormChange}
            ></textarea>
            <select
              name="priority"
              value={form.priority}
              onChange={handleFormChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleFormChange}
            />

            <div className="modal-actions">
              <button className="primary_button" onClick={saveTask}>
                {editingIndex !== null ? "Update" : "Create"}
              </button>
              <button className="secondary_button" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
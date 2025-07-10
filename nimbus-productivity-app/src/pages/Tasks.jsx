import React, { useState } from "react";
const [selectedTag, setSelectedTag] = useState("");

import "./Page.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [customTag, setCustomTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [form, setForm] = useState({
    text: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
    tags: [],
  });

  const openModal = () => {
    setEditingIndex(null);
    setForm({
      text: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      status: "Pending",
      tags: [],
    });
    setCustomTag("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = () => {
    if (customTag.trim()) {
      setForm((prev) => ({
        ...prev,
        tags: [...prev.tags, customTag.trim()],
      }));
      setCustomTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
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
    setForm({ ...task });
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="page tasks">
      {/* Header Row */}
      <div className="top-row">
        <div>
          <h1 className="namemanager">Task Manager</h1>
          <p className="page-subtitle">
            Helps you manage tasks efficiently and track time spent on each activity to boost your productivity.
          </p>
        </div>
        <div className="button-search-group">
          <button className="primary_button" onClick={openModal}> + Add Task</button>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Task List or Empty State */}
      {tasks.length === 0 ? (
        <div className="no-tasks-box">
          <p className="no-tasks-text">You don't have any tasks yet.</p>
          <button className="primary_button" onClick={openModal}>
            + Create Your First Task
          </button>
        </div>
      ) : (
        <ul className="task-list">
          {tasks
            .filter((task) =>
              task.text.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((task, index) => (
              <li key={index} className={`task-item ${task.done ? "completed" : ""}`}>

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
                    <span className="task-category">
                      Due: {task.dueDate || "N/A"}
                    </span>
                    <span
  className={`task-priority ${
    task.priority.toLowerCase() === "high"
      ? "high"
      : task.priority.toLowerCase() === "medium"
      ? "medium"
      : "low"
  }`}
>
  {task.priority}
</span>

                    <span className="task-category">Status: {task.status}</span>
                    <span className="task-category">
                      Tags: {task.tags?.join(", ")}
                    </span>
                  </div>
                </div>
                <div className="task-actions">
                  <button onClick={() => editTask(index)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => deleteTask(index)} className="delete-button">
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingIndex !== null ? "Edit Task" : "Create New Task"}</h2>

            <input
              name="text"
              placeholder="Task Title"
              value={form.text}
              onChange={handleFormChange}
            />
            <textarea
              name="description"
              placeholder="Add details about this task"
              rows="3"
              value={form.description}
              onChange={handleFormChange}
            />

            <div className="modal-row">
              <div className="modal-section">
                <label>Priority</label>
                <select name="priority" value={form.priority} onChange={handleFormChange}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="modal-section">
                <label>Due Date</label>
                <input
                  name="dueDate"
                  type="date"
                  value={form.dueDate}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="modal-row">
              <div className="modal-section">
                <label>Status</label>
                <select name="status" value={form.status} onChange={handleFormChange}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <label>Tags</label>
            <div className="tag-row">
              <input
                type="text"
                placeholder="Add a tag"
                value={customTag}
                onChange={(e) => setCustomTag(e.target.value)}
              />
              <button onClick={handleTagChange}>Add</button>
            </div>
            <div className="tag-list">
              {form.tags.map((tag, i) => (
                <span key={i} className="tag" onClick={() => removeTag(tag)}>{tag} ×</span>
              ))}
            </div>

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

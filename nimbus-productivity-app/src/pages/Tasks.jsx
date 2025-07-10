import React, { useState } from "react";
import "./Page.css";

function Tasks() {
  const [tasksByDate, setTasksByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [customTag, setCustomTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const [form, setForm] = useState({
    text: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
    tags: [],
  });

  const getTasksForDate = () => tasksByDate[selectedDate] || [];

  const updateTasksForDate = (newTasks) => {
    setTasksByDate((prev) => ({
      ...prev,
      [selectedDate]: newTasks,
    }));
  };

  const openModal = () => {
    setEditingIndex(null);
    setForm({
      text: "",
      description: "",
      priority: "Medium",
      dueDate: selectedDate,
      status: "Pending",
      tags: [],
    });
    setCustomTag("");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

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
      const tasks = getTasksForDate();
      if (editingIndex !== null) {
        const updated = [...tasks];
        updated[editingIndex] = { ...updated[editingIndex], ...form };
        updateTasksForDate(updated);
      } else {
        updateTasksForDate([...tasks, { ...form, done: false }]);
      }
      closeModal();
    }
  };

  const toggleDone = (index) => {
    const updated = [...getTasksForDate()];
    updated[index].done = !updated[index].done;
    updateTasksForDate(updated);
  };

  const deleteTask = (index) => {
    const updated = getTasksForDate().filter((_, i) => i !== index);
    updateTasksForDate(updated);
  };

  const editTask = (index) => {
    const task = getTasksForDate()[index];
    setForm({ ...task });
    setEditingIndex(index);
    setShowModal(true);
  };

  const filteredTasks = getTasksForDate().filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterTag === "" || task.tags.includes(filterTag))
  );

  return (
    <div className="page tasks">
      {/* Header */}
      <div className="top-row">
        <div>
          <h1 className="namemanager">Task Manager</h1>
          <p className="page-subtitle">
            Manage your tasks datewise and track your day-to-day activities.
          </p>
        </div>
        <div className="button-search-group">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-picker"
          />
          <button className="primary_button" onClick={openModal}>+ Add Task</button>
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

      {/* Filter Tags */}
      <div className="filter-tags">
        <select onChange={(e) => setFilterTag(e.target.value)} value={filterTag}>
          <option value="">All Tags</option>
          {[...new Set(getTasksForDate().flatMap((task) => task.tags))].map((tag, i) => (
            <option key={i} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {filteredTasks.length === 0 ? (
  <div className="no-tasks-box">
    <p className="no-tasks-text">
      {getTasksForDate().length === 0 ? (
        new Date(selectedDate) < new Date(new Date().toDateString()) ? (
          "Oops! No tasks found. That might've been a lazy day 😴 — let's do better today!"
        ) : (
          "You don't have any tasks yet."
        )
      ) : (
        "No tasks match your search or filter."
      )}
    </p>
    {new Date(selectedDate) >= new Date(new Date().toDateString()) && (
      <button className="primary_button" onClick={openModal}>
        + Create Your Task
      </button>
    )}
  </div>
) : (
  <ul className="task-list">

          {filteredTasks.map((task, index) => (
            <li key={index} className={`task-item ${task.done ? 'done' : ''}`}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(index)}
              />
              <div className="task-details">
                <span className="task-text" style={{
                  textDecoration: task.done ? "line-through" : "none",
                  color: task.done ? "gray" : "inherit"
                }}>
                  <strong>{task.text}</strong>
                </span>
                <p className="task-description">{task.description}</p>
                <div className="task-meta">
                  <span className="task-category">Due: {task.dueDate || "N/A"}</span>
                  <span className={`task-priority-box ${task.priority.toLowerCase()}`}>{task.priority}</span>
                  <span className="task-category">Status: {task.status}</span>
                  <span className="task-category">Tags: {task.tags.join(", ")}</span>
                </div>
              </div>
              <div className="task-actions">
                <button onClick={() => editTask(index)} className="edit-button">Edit</button>
                <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
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

            <div className="modal-section">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleFormChange}>
                <option value="Pending">Pending</option>
                <option value="Dispatched">In Progress</option>
                <option value="Delivered">Done</option>
              </select>
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

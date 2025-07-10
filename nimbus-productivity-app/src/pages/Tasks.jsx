import React, { useState } from "react";
import "./Page.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filterPriority, setFilterPriority] = useState("All");

  const [form, setForm] = useState({
    text: "",
    description: "",
    priority: "Medium",
    category: "",
    dueDate: "",
    tags: [],
  });

  const priorities = ["Low", "Medium", "High"];
  const tagOptions = ["Work", "Personal", "Health"];

  const openModal = () => {
    setEditingIndex(null);
    setForm({
      text: "",
      description: "",
      priority: "Medium",
      category: "",
      dueDate: "",
      tags: [],
    });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTag = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const saveTask = () => {
    if (form.text.trim()) {
      const newTask = { ...form, done: false, timeSpent: 0 };
      if (editingIndex !== null) {
        const updated = [...tasks];
        updated[editingIndex] = newTask;
        setTasks(updated);
      } else {
        setTasks([...tasks, newTask]);
      }
      closeModal();
    }
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

  const filteredTasks =
    filterPriority === "All"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  return (
    <div className="page tasks">
      <h1>Tasks</h1>

      {/* Filters */}
      <div className="filters-box">
        <div>
          <h4>Filters</h4>
          <div className="priority-filters">
            {["All", "Low", "Medium", "High"].map((level) => (
              <button
                key={level}
                className={`priority-filter-button ${
                  filterPriority === level ? "active" : ""
                }`}
                onClick={() => setFilterPriority(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4>Tags</h4>
          <div className="tag-filter-list">
            {tagOptions.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button className="primary_button" onClick={openModal}>
        Add Task
      </button>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-details">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="task-text">
                  <strong>{task.text}</strong>
                </span>
                <div>
                  <button onClick={() => editTask(index)} className="edit-button">
                    ✏️
                  </button>
                  <button onClick={() => deleteTask(index)} className="delete-button">
                    🗑️
                  </button>
                </div>
              </div>
              <p className="task-description">{task.description}</p>
              <div className="task-meta">
                <span className={`priority-chip ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
                {task.tags.map((tag, i) => (
                  <span key={i} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="task-footer">
                <span>🕒 00:00:00</span>
                {task.dueDate && <span>📅 {task.dueDate}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingIndex !== null ? "Edit Task" : "Create New Task"}</h2>
            <input
              name="text"
              placeholder="Task title"
              value={form.text}
              onChange={handleFormChange}
            />
            <textarea
              name="description"
              placeholder="Add details about this task"
              value={form.description}
              onChange={handleFormChange}
            />
            <div className="modal-row">
              <div>
                <label>Priority</label>
                <div className="priority-select-group">
                  {priorities.map((level) => (
                    <button
                      key={level}
                      className={`priority-chip ${level.toLowerCase()} ${
                        form.priority === level ? "selected" : ""
                      }`}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, priority: level }))
                      }
                      type="button"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={form.dueDate}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div>
              <label>Tags</label>
              <div className="tag-select-group">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-chip ${
                      form.tags.includes(tag) ? "selected" : ""
                    }`}
                    onClick={() => toggleTag(tag)}
                    type="button"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="primary_button" onClick={saveTask}>
                {editingIndex !== null ? "Update Task" : "Create Task"}
              </button>
              <button className="secondary_button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;

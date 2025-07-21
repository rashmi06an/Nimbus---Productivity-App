import React, { useEffect, useState } from "react";
import "./notes.css";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState(null);
  const [newNote, setNewNote] = useState({ title: "", content: "", tag: "" });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      (!filterTag || note.tag === filterTag) &&
      (note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()))
  );

  const uniqueTags = [
    ...new Set(notes.map((note) => note.tag).filter(Boolean)),
  ];

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const createdAt = new Date().toISOString();
      setNotes([
        ...notes,
        { ...newNote, id: Date.now().toString(), createdAt },
      ]);
      setNewNote({ title: "", content: "", tag: "" });
      setSelectedNote(null);
    }
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className={`notes-page ${theme}`}>
      <div className="notes-header">
        <h2 className="notes-title">Notes</h2>
        <div className="notes-controls">
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setSelectedNote({})}>+ Add New Note</button>
        </div>
      </div>

      <div className="notes-body">
        <aside className="sidebar">
          <div className="tags-section">
            <h4 className="filter-heading">Filter by Tags</h4>
            <div className="tag-buttons">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  className={filterTag === tag ? "active" : ""}
                  onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                >
                  {tag}
                </button>
              ))}
              {filterTag && (
                <button className="clear" onClick={() => setFilterTag(null)}>
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="note-list">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className={`note-item ${
                    selectedNote?.id === note.id ? "selected" : ""
                  }`}
                  onClick={() => handleSelectNote(note)}
                >
                  <h4 className="note-title">{note.title}</h4>
                  <p className="note-tag">{note.tag}</p>
                  <p className="note-date">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="no-notes">No notes found</div>
            )}
          </div>
        </aside>

        <main className="note-content">
          {!selectedNote ? (
            <div className="empty-state">
              <p>
                Select a note from the sidebar or create a new one to get
                started.
              </p>
              <button onClick={() => setSelectedNote({})}>
                + Create New Note
              </button>
            </div>
          ) : !selectedNote.id ? (
            <div className="note-form">
              <input
                type="text"
                placeholder="Title"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
              />
              <textarea
                placeholder="Write your note..."
                value={newNote.content}
                onChange={(e) =>
                  setNewNote({ ...newNote, content: e.target.value })
                }
              />
              {uniqueTags.length > 0 && (
                <select
                  value={newNote.tag}
                  onChange={(e) =>
                    setNewNote({ ...newNote, tag: e.target.value })
                  }
                >
                  <option value="">Select Tag</option>
                  {uniqueTags.map((tag, i) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              )}

              <input
                type="text"
                placeholder="Or create a new tag"
                value={newNote.tag}
                onChange={(e) =>
                  setNewNote({ ...newNote, tag: e.target.value })
                }
              />

              <button onClick={handleAddNote}>Save</button>
              <button onClick={() => setSelectedNote(null)}>Cancel</button>
            </div>
          ) : (
            <div className="note-detail">
              <h2 className="note-title">{selectedNote.title}</h2>
              <p>{selectedNote.content}</p>
              <span className="note-tag">{selectedNote.tag}</span>
              <div className="note-date-view">
                Created on:{" "}
                {new Date(selectedNote.createdAt).toLocaleDateString()}
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default NotesPage;
import React, { useState } from 'react';
import './notes.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState('');
  const [filterTag, setFilterTag] = useState(null);

  const [newNote, setNewNote] = useState({ title: '', content: '', tag: '' });

  const filteredNotes = notes.filter(note =>
    (!filterTag || note.tag === filterTag) &&
    (note.title.toLowerCase().includes(search.toLowerCase()) ||
     note.content.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      setNotes([...notes, { ...newNote, id: Date.now().toString() }]);
      setNewNote({ title: '', content: '', tag: '' });
      setSelectedNote(null);
    }
  };

  const handleSelectNote = note => {
    setSelectedNote(note);
  };

  const uniqueTags = [...new Set(notes.map(note => note.tag).filter(tag => tag))];

  return (
    <div className="notes-page">
      {/* Header */}
      <div className="notes-header">
        <h2>Notes</h2>
        <div className="notes-controls">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={() => setSelectedNote(null)}>Add New Note</button>
        </div>
      </div>

      <div className="notes-main">
        {/* Sidebar: Tags & Note List */}
        <div className="notes-sidebar">
          <div className="filter-box">
            <h4>Filter by Tags</h4>
            <div className="tags">
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  className={filterTag === tag ? 'active' : ''}
                  onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="note-list">
            {filteredNotes.map(note => (
              <div key={note.id} className="note-card" onClick={() => handleSelectNote(note)}>
                <strong>{note.title}</strong>
                <span>{note.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Note View / Editor */}
        <div className="notes-content">
          {!selectedNote ? (
            <div className="empty-state">
              <p>Select a note from the sidebar or create a new note to get started.</p>
              <button onClick={() => setSelectedNote({})}>Create New Note</button>
            </div>
          ) : selectedNote && !selectedNote.id ? (
            <div className="note-form">
              <input
                type="text"
                placeholder="Title"
                value={newNote.title}
                onChange={e => setNewNote({ ...newNote, title: e.target.value })}
              />
              <textarea
                placeholder="Write your note..."
                value={newNote.content}
                onChange={e => setNewNote({ ...newNote, content: e.target.value })}
              />
              <input
                type="text"
                placeholder="Tag"
                value={newNote.tag}
                onChange={e => setNewNote({ ...newNote, tag: e.target.value })}
              />
              <button onClick={handleAddNote}>Save</button>
            </div>
          ) : (
            <div className="note-detail">
              <h3>{selectedNote.title}</h3>
              <p>{selectedNote.content}</p>
              <p className="note-tag">{selectedNote.tag}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;

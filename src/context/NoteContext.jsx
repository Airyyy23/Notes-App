import { createContext, useState, useEffect } from 'react';
import getInitialData from '../utils';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : getInitialData();
  });

  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingNote]);

  useEffect(() => {
    if (!showForm) {
      setEditingNote(null);
    }
  }, [showForm]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditingNote(null);
    setShowForm(false);
  };

  const editNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        editNote,
        deleteNote,
        archiveNote,
        filteredNotes,
        searchQuery,
        setSearchQuery,
        editingNote,
        showForm,
        toggleShowForm,
        title,
        body,
        setTitle,
        setBody,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

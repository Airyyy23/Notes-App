import { useContext, useEffect } from 'react';
import { NoteContext } from '../context/NoteContext.jsx';
import CustomButton from './Button';

const NoteForm = () => {
  const { addNote, updateNote, editingNote, showForm, title, body, setTitle, setBody } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: editingNote ? editingNote.id : Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    if (editingNote) {
      updateNote(newNote);
    } else {
      addNote(newNote);
    }
    setTitle('');
    setBody('');
  };

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    }
  }, [editingNote]);

  return (
    <form className={`text-center w-[80%] m-auto ${showForm ? 'block' : 'hidden'}`} onSubmit={handleSubmit}>
      <div className="flex flex-col my-5">
        <label htmlFor="title">Note Title</label>
        <input
          type="text"
          id="title"
          className="border-2 p-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="content">Note Content</label>
        <textarea
          id="content"
          className="border-2 p-2 rounded-lg"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <CustomButton content={editingNote ? 'Update' : 'Add'} type={'submit'} />
    </form>
  );
};

export default NoteForm;

import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext.jsx';
import Card from './Card';

const NoteList = () => {
  const { filteredNotes, deleteNote, archiveNote, editNote } = useContext(NoteContext);

  return (
    <div className='w-11/12 m-auto'>
      <h1 className="text-center text-3xl max-md:text-xl font-bold">Your Notes</h1>
      <div>
        <h2 className="text-xl max-md:text-lg font-bold mt-5">Active Notes</h2>
        {filteredNotes.filter(note => !note.archived).length === 0 ? (
          <p>Tidak ada catatan aktif</p>
        ) : (
          filteredNotes.filter(note => !note.archived).map((note) => (
            <Card
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              editNote={editNote}
            />
          ))
        )}
      </div>
      <hr className="my-5" />
      <div>
        <h2 className="text-xl max-md:text-lg font-bold">Archived Notes</h2>
        {filteredNotes.filter(note => note.archived).length === 0 ? (
          <p>Tidak ada catatan arsip</p>
        ) : (
          filteredNotes.filter(note => note.archived).map((note) => (
            <Card
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              editNote={editNote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;

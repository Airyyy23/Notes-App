import CustomButton from './Button';

const Card = ({ note, deleteNote, archiveNote, editNote }) => {
  return (
    <div className="border p-4 rounded-lg my-2">
      <h3 className="font-bold">{note.title}</h3>
      <p>{note.body}</p>
      <div className="flex gap-2 justify-between mt-5">
        <CustomButton content="Edit" onClick={() => editNote(note)} />
        <CustomButton
          content={note.archived ? 'Unarchive' : 'Archive'}
          onClick={() => archiveNote(note.id)}
        />
        <CustomButton content="Delete" onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
};

export default Card;

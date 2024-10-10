import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext.jsx';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(NoteContext);

  return (
    <div className="w-4/5 m-auto mb-5">
      <input
        type="text"
        className="border-2 w-full rounded-full p-4 max-md:py-3"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

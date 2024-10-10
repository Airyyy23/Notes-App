import { useContext } from 'react';
import { NoteContext, NoteProvider } from './context/NoteContext.jsx';
import CustomButton from './components/Button';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <NoteProvider>
      <MainComponent />
    </NoteProvider>
  );
};

const MainComponent = () => {
  const { toggleShowForm, showForm } = useContext(NoteContext);

  return (
    <div>
      <h1 className="text-center text-4xl max-md:text-2xl font-bold my-5">
        Personal Note Apps
      </h1>
      <hr />
      <NoteForm />
      <hr className={showForm ? 'block w-4/5 m-auto my-5' : 'hidden'} />
      <div className="flex justify-center my-5">
        <CustomButton
          content={showForm ? 'Close' : 'Add Note'}
          onClick={toggleShowForm}
        />
      </div>
      <hr className="w-4/5 m-auto mb-5" />
      <SearchBar />
      <NoteList />
      <Footer />
    </div>
  );
};

export default App;

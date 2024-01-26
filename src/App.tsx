import { useEffect, useState } from 'react'
import './App.css'
import Note from './interfaces/Note';
import Card from './components/Card/Card';
import { GrUpdate } from './components/Icons';
import Fetching from './API/Fething';
import Button from './components/Button/Button';
import InputNote from './components/InputNote/InputNote';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState('');

  const updateNotes = async() => {
    const notes = await Fetching.getNotes();
    notes && setNotes(notes)
  };

  const addNote = async() => {
    const value = text.trim();
    if (!value) return;
    await Fetching.addNote(value);
    await updateNotes();
    setText('');
  }

  const deleteNotes = async(id: number) => {
    await Fetching.deleteNote(id);
    await updateNotes();
  }
  
  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="crud">
      <div className="crud__row">
        <h3 className="crud__title">Notes</h3>
        <Button handler={updateNotes}>
          <GrUpdate />
        </Button>
      </div>
      <div className="crud__row">
        {
          notes.map(note => <Card
            key={note.id}
            note={note}
            handler={deleteNotes}
          />)
        }
      </div>
      <InputNote
        text={text}
        setText={setText}
        addNote={addNote}
      />
    </div>
  )
}

export default App
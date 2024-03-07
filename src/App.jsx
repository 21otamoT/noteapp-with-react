import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notos")) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージに保存する
    localStorage.setItem("notos", JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    setActiveNote(notes[0] && notes[0].id);
  }, []);

  //追加機能
  const onAddNote = () => {
    console.log('OK');
    const newNote = {
      id: uuid(),
      title: 'new note',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };
  //削除機能
  const onDelete = (id) => {
    const filterNotes = notes.filter(note => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updatedNptes = notes.map(note => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      }
      else {
        return note;
      }
    });
    setNotes(updatedNptes);
  };

  return (
    <div className='App'>
      <Sidebar 
        onAddNote={onAddNote} 
        notes={notes} 
        onDelete={onDelete}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App

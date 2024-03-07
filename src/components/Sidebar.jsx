import React from 'react'
import './Sidebar.css'

const Sidebar = ({onAddNote, notes, onDelete, activeNote, setActiveNote}) => {
const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate)

  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className='sidebarNotes'>
        {sortedNotes.map(note => (
          <div key={note.id} className={`${note.id === activeNote && 'active'}`} onClick={() => setActiveNote(note.id)}>
            <div className='sodebarNote'>
              <strong>{note.title}</strong>
              <button className='delete' onClick={() => onDelete(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日:{new Date(note.modDate).toLocaleDateString('ja-JP', {
              hour: '2-digit',
              minute: '2-digit'
            })}
            </small>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Sidebar
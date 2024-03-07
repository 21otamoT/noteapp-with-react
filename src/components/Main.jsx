import React from 'react'
import './Main.css'
import Markdown from 'react-markdown'

const Main = ({activeNote, onUpdateNote}) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,  
      [key]: value,
      modDate: Date.now()
    });
  }

  if(!activeNote) {
    return <div className='noActive'>ノートが選択されていません</div>
  }

  return (
    <div className='main'>
      <div className='mainNoteEdit'>
        <input id='title' 
               type="text" 
               value={activeNote.title} 
               onChange={e => onEditNote("title", e.target.value)}
        />
        <textarea 
          id='content' 
          placeholder='ノート内容を記入'
          value={activeNote.content}
          onChange={e => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className='mainNotePreview'>
        <h1 className='previewTitle'>{activeNote.title}</h1>
        <Markdown className='markdownPreview'>
          {activeNote.content}
        </Markdown>
      </div>
    </div>
  )
}

export default Main
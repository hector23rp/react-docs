import React from 'react'

const Note = ({ note, toogleInstance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important';
  
  return (
    <li className='note'>
      <div>
        {note.content}
      </div>
      <button onClick={toogleInstance}>{label}</button>
    </li>
  )
}

export default Note
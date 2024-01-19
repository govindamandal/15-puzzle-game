import React from 'react'

function NewGame({ reset }) {
  return (
    <div className="button-wrapper">
        <button type='button' onClick={reset}>New Game</button>
    </div>
  )
}

export default NewGame
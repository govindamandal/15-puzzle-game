import React from 'react'
import NewGame from './NewGame'

function Winner({ numbers, reset }) {
    if (!numbers.every(n => n.value === n.index + 1)) {
        return null;
    }
  return (
    <div className="winner">
      <p>You won!</p>
      <NewGame reset={reset} />
    </div>
  )
}

export default Winner
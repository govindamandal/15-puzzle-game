import React from 'react'

function Winner({ numbers }) {
    if (numbers.every(n => n.value !== n.index + 1)) {
        return <></>
    }
  return (
    <div className="winner">You won!</div>
  )
}

export default Winner
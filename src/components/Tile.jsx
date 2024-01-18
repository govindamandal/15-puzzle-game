import React from 'react'

function Tile({ number }) {
  return (
    <div
        className={`number ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}
    >
        { number.value == 16 ? '' : number.value }
    </div>
  )
}

export default Tile
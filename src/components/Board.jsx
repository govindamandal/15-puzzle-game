import { useState } from "react";
import Overlay from "./Overlay";
import Tile from "./Tile";

function Board() {
  const shuffle = () => {
    return new Array(16)
                .fill()
                .map((_, i) => i + 1)
                .sort(() => Math.random() - .5)
                .map((x, i) => ({ index: i, value: x}));
  }
  const [numbers, setNumbers] = useState(shuffle());
  return (
    <div className="game">
      <div className="board">
        <Overlay />
        
        {numbers.map((x, i) => <Tile key={i} number={x} />)}
      </div>
    </div>
  )
}

export default Board;
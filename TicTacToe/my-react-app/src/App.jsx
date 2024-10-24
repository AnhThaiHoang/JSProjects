import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Tile from "./Tile.jsx";

function App() {

  const [turn, setTurn] = useState(1)

  //board stuff
  let dimension = 3

  const board = []

  for (let i = 0; i < dimension; i++){
    const row = []
    for(let j = 0; j < dimension; j++){
      const [value, setValue] = useState(i + ":" + j)
      row.push( 
        <Tile key={j} value={value} handleClick={() => handleClick(setValue)}/>
      )
    }
    board.push(<div className="d-flex" key={i}>{row}</div>)
  }

  //--------------------------

  const handleClick = (setValue)=>{    

    if(turn % 2 === 0) setValue("X")
    else setValue("O")

    setTurn(t =>  t + 1)
    console.log("turn: " + turn)
}


  return (
    <div>
      <h1>Tic tac toe</h1>

        {board}

    </div>
  )
}

export default App

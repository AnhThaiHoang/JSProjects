import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Tile from "./Tile.jsx";
import State from "./State.js";

function App() {

  const [turn, setTurn] = useState(0)

  const boardStats = [];


  //board stuff
  let dimension = 3

  const board = []

  for (let x = 0; x < dimension; x++){
    const row = []
    const rowStats = [];
    for(let y = 0; y < dimension; y++){
      const [tileStats, setTileStat] = useState({value: State.EMPTY, x: x, y: y})
      rowStats.push(tileStats)
      row.push( 
        <Tile key={y} tileStats={tileStats} handleClick={() => handleClick(tileStats, setTileStat)}  winnerCheck={() => winnerCheck(tileStats)}/>
      )
    }
    boardStats.push(rowStats)
    board.push(<div className="d-flex" key={x}>{row}</div>)
  }

  //--------------------------


  //gameplay

  const handleClick = (tileStats, setTileStat)=>{    
    if(tileStats.value != State.EMPTY) return

    if(turn % 2 === 0) 
      setTileStat({...tileStats, value: State.X})
    else 
      setTileStat({...tileStats, value: State.O})

    setTurn(t =>  t + 1)
  }

  const winnerCheck = (tileStats) =>{
    if(tileStats.value !== State.EMPTY)

    for(let i = 0; i < dimension; i++){
      if(boardStats[tileStats.x][i].value !== tileStats.value)
          break;
      if(i === dimension-1){
          //report win for s
          console.log("winner")
      }

    }
  }

  return (
    <div>
      <h1>Tic tac toe</h1>
      <h3>{turn}</h3>
        {board}

    </div>
  )
}

export default App

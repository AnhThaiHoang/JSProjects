import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Tile from "./Tile.jsx";
import State from "./State.js";

function App() {

  const [turn, setTurn] = useState(0)
  const [endGame, setEndGame] = useState("")

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
    if(tileStats.value === State.EMPTY) return

    //winner check - https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over
    
    //check row
    for(let i = 0; i < dimension; i++){
      if(boardStats[tileStats.x][i].value !== tileStats.value)
          break;
      if(i === dimension-1){
          //report win for s
          console.log("winner")
          win(tileStats.value)
      }
    }

    //check col
    for(let i = 0; i < dimension; i++){
        if(boardStats[i][tileStats.y].value !== tileStats.value)
            break;
        if(i === dimension-1){
            //report win for s
            console.log("winner")
            win(tileStats.value)
        }
    }
    
    //check diag
    if(tileStats.x === tileStats.y){
        //we're on a diagonal
        for(let i = 0; i < dimension; i++){
            if(boardStats[i][i].value !== tileStats.value)
                break;
            if(i === dimension-1){
                //report win for s
                console.log("winner")
                win(tileStats.value)
            }
        }
    }
        
    //check anti diag (thanks rampion)
    if(tileStats.x + tileStats.y === dimension - 1){
        for(let i = 0; i < dimension; i++){
            if(boardStats[i][(dimension-1)-i].value !== tileStats.value)
                break;
            if(i === dimension-1){
                //report win for s
                console.log("winner")
                win(tileStats.value)
            }
        }
    }

    //check draw
    if(turn === (Math.pow(dimension, 2) - 1)){
        //report draw
        console.log("draw")
        draw()
    }
  }


  const win = (winner) => {
    setEndGame("winner is " + winner)

  }

  const draw = () => {
    setEndGame("It is draw")

  }



  return (
    <div>
      <h1>Tic tac toe</h1>
      <h3>{turn}</h3>
      <h2>{endGame}</h2>
      <div>
        {board}
      </div>
        

    </div>
  )
}

export default App

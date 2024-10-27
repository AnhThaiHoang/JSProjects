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
      const [tileStats, setTileStat] = useState({value: State.EMPTY, x: x, y: y, setter: (o) => setTileStat(o)})
      rowStats.push(tileStats)
      row.push( 
        <Tile key={y} tileStats={tileStats} handleClick={() => handleClick(tileStats)}  winnerCheck={() => winnerCheck(tileStats)}/>
      )
    }
    boardStats.push(rowStats)
    board.push(<div className="d-flex" key={x}>{row}</div>)
  }

  //--------------------------


  //gameplay
  const handleClick = (tileStats)=>{    
    if(tileStats.value != State.EMPTY) return

    if(turn % 2 === 0) 
      tileStats.setter({...tileStats, value: State.X})
    else 
      tileStats.setter({...tileStats, value: State.O})

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
          win(tileStats.value)
          return
      }
    }

    //check col
    for(let i = 0; i < dimension; i++){
        if(boardStats[i][tileStats.y].value !== tileStats.value)
            break;
        if(i === dimension-1){
            //report win for s
            win(tileStats.value)
            return
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
                win(tileStats.value)
                return
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
                win(tileStats.value)
                return
            }
        }
    }

    //check draw
    if(turn === (Math.pow(dimension, 2))){
        //report draw
        draw()
    }
  }

  const gameReset = () =>{
    setTimeout(()=>{
      boardStats.map((e, _) => 
        e.map((e, _) => 
          e.setter({...e, value: State.EMPTY})
        )
      )
      setTurn(0)
      setEndGame("")

    },3000)

  }


  const win = (winner) => {
    console.log("winner")
    setEndGame("winner is " + winner)
    gameReset()

  }

  const draw = () => {
    console.log("draw")
    setEndGame("It is draw")
    gameReset()

  }



  return (
    <div>
      <h1>Tic tac toe</h1>
      <h3>{turn}</h3>
      <h2>{endGame}</h2>

      {board}

    </div>
  )
}

export default App

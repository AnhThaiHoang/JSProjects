import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Tile from "./Tile.jsx";

function App() {
  
  let dimension = 3

  const board = [];

  for (let i = 0; i < dimension; i++){
    const row = []
    for(let j = 0; j < dimension; j++){
      row.push( 
        <Tile key={j} x={i} y={j}/>
      )
    }
    board.push(<div className="d-flex" key={i}>{row}</div>)
  }

  return (
    <div>
      <h1>Tic tac toe</h1>

        {board}

    </div>
  )
}

export default App

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import State from "./State.js";

function Tile({tileStats, handleClick, winnerCheck}){
    const myStyle = {
        width: "10em",
        height: "10em"
    }

    useEffect(() => {
        winnerCheck(tileStats)
    },[tileStats]);

    return(
        <div className="d-flex justify-content-center align-items-center border" style={myStyle} onClick={handleClick}>
            <h1 className="text-center">{tileStats.value === State.EMPTY ? tileStats.x + " : " + tileStats.y : tileStats.value}</h1>
        </div>
    )
}

export default Tile
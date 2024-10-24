import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";

function Tile({tileStats, handleClick, winnerCheck}){
    const myStyle = {
        width: "200px",
        height: "200px"
    }

    useEffect(() => {
        winnerCheck(tileStats)
    },[tileStats]);

    return(
        <div className="d-flex justify-content-center align-items-center border" style={myStyle} onClick={handleClick}>
            <h1 className="text-center">{tileStats.value}</h1>
        </div>
    )
}

export default Tile
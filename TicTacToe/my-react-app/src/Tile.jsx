import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Tile({x,y}){
    const myStyle = {
        width: "200px",
        height: "200px"
    }


    return(
        <div className="d-flex justify-content-center align-items-center border" style={myStyle}>
            <h1 className="text-center opacity-25">{x} : {y}</h1>
        </div>
    )
}

export default Tile
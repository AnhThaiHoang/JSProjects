import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Tile({value, handleClick}){
    const myStyle = {
        width: "200px",
        height: "200px"
    }


    return(
        <div className="d-flex justify-content-center align-items-center border" style={myStyle} onClick={handleClick}>
            <h1 className="text-center">{value}</h1>
        </div>
    )
}

export default Tile
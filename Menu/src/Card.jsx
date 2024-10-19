import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Card({img, foodName, description, price}){
    return(
        <div className="d-flex px-2 border rounded shadow">
            <img className="" src={img} alt="food image" height={"200px"} />
            <div className="m-5">
                <h3 className="card-title  text-underlined mb-2 text-warning">{foodName}</h3>
                <p className="card-text">{description}</p>
                <br/>
                <h3 className=" text-end me-5">
                    <small className="text-muted">{price} Kč</small>
                </h3>
            </div>
        </div>
    )

}

export default Card
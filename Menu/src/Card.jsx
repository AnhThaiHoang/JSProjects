import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Card({img, foodName, description, price}){
    return(
        <div className="d-flex border border-primary mb-5">
            <img className="" src={img} alt="food image" width={"200px"} />
            <div className="my-5 border">
                <h3 className="card-title">{foodName}</h3>
                <p className="card-text">{description}</p>
                <br/>
                <span>{price} Kč</span>
            </div>
        </div>
    )

}

export default Card
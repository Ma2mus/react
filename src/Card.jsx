
function Card({name = "Guest", text="Undefined text"}){ 
    return(
        <div className="card">
            <img className="img-source" src="https://placehold.co/150" alt="image-profile" />
            <h2 className="card-title">{name}</h2>
            <p>{text}</p>
        </div>
    )
}



export default Card
import React from "react";
import "../../styles/ImageCard.css";

function ImageCard(props) {
    return (
        <div className="card m-2">
            
                <img
                src={props.image}
                id={props.id}
                className="dog-imageCard card-img img-fluid"
                alt={props.name}
                />
            
        </div>
    );
}

export default ImageCard;
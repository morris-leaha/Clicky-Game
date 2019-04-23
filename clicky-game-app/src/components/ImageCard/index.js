import React from "react";

function ImageCard(props) {
    return (
        <div className="card" onClick={() => props.scoreCheck(props.id)}>
            <div className="img-container">
                <img 
                src={props.image} 
                id={props.id} 
                className="dog-imageCard" 
                alt={props.name}
                />
            </div>
        </div>
    );
}

export default ImageCard;
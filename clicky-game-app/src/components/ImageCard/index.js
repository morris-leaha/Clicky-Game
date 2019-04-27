import React from "react";
import "../../styles/ImageCard.css";
import { Col } from "../Grid";

function ImageCard(props) {
    return (
        <Col size="lg-3 md-4">
            <div className="card m-2 shadow">
                <img
                    src={props.image}
                    id={props.id}
                    className="dog-imageCard card-img img-fluid"
                    alt={props.name}
                    onClick={() => props.handleClick(props.id, props.clicked)}
                />
            </div>
        </Col>
    );
}

export default ImageCard;
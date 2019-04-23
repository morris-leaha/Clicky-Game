import React from "react";
import { Container } from "../Grid";
// import "../../Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <Container>
                <h1 className="display-3">Dog Memory Game</h1>
                <p className="lead">Click on your favorite dog to earn points, just don't pick the same one twice!</p>
            </Container>
        </div>
    );
}

export default Jumbotron;
// =============================================
//          DOG IMAGES | GAME LOGIC
// =============================================

import React, { Component } from "react";
import dogs from "../dogs.json";
import { Container } from "../components/Grid";
import ImageCard from "../components/ImageCard";

class Dogs extends Component {
    // Class components should always call the base constructor with props (https://reactjs.org/docs/state-and-lifecycle.html)
    // The 'super' keyword is used to access and call functions on an object's parent
    // Have to bind to make sure functions have access to component attributes
    constructor(props) {
        super(props);
        // this.scoreCheck = this.scoreCheck.bind(this);
        // this.shuffleImages = this.shuffleImages.bind(this);
        // Assign the initial this.state
        this.state = {
            dogs,
            clickedImages: [],
            score: 0,
            highScore: 0
        }
    }

    render() {
        return (
            <Container>
                <div className="row justify-content-around">
                    {this.state.dogs.map(dogs => (
                        <ImageCard
                            key={dogs.id}
                            id={dogs.id}
                            image={dogs.image}
                        // scoreCheck={this.scoreCheck}
                        />
                    ))}
                </div>
            </Container>
        );
    }
}

export default Dogs;
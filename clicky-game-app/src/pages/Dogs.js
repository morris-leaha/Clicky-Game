// =============================================
//          DOG IMAGES | GAME LOGIC
// =============================================

import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import shuffle from "shuffle-array";
import dogs from "../dogs.json";
import { Container } from "../components/Grid";
import ImageCard from "../components/ImageCard";

class Dogs extends Component {

    // Assign the initial this.state
    state = {
        dogs,
        score: 0,
        highScore: 0
    }


    handleClick = id => {
        let correctGuess = false;
        const newDogs = this.state.dogs.map(dog => {
            const newDog = { ...dog };
            if (newDog.id === id) {
                if (!newDog.clicked) {
                    newDog.clicked = true;
                    correctGuess = true;
                }
            }
            return newDog;
        });
        console.log(newDogs);
        if (correctGuess) {
            this.setState({ dogs: newDogs });
            this.handleCorrectGuess();
        } else {
            this.handleIncorrectGuess();
        }
    }

    handleIncorrectGuess = () => {
        this.setState({
            score: 0,
            dogs: shuffle([...this.state.dogs])
        })
    }

    handleCorrectGuess = () => {
        let { score, highScore } = this.state;
        const newScore = score + 1;
        const newHighScore = Math.max(highScore, newScore);
        this.setState({
            score: newScore,
            highScore: newHighScore,
            dogs: shuffle([...this.state.dogs])
        });
    }

    render() {
        return (
            <div>
                <Navbar
                    score={this.state.score}
                    highScore={this.state.highScore}
                />
                <Jumbotron />
                <Container>
                    <div className="row justify-content-around">
                        {this.state.dogs.map(dog => (
                            <ImageCard
                                key={dog.id}
                                id={dog.id}
                                image={dog.image}
                                handleClick={this.handleClick}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Dogs;
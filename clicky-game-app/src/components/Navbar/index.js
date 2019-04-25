import React from "react";
// import "../../Navbar.css";


function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light sticky-top">
            <a className="navbar-brand h1" href="/">Clicky-Game</a>
            <div className="navbar-text" id="navbarScore">
                <span className="curr-score mr-2">Score: {props.score}</span>
                <span>|</span>
                <span className="top-score ml-2">Top Score: {props.highScore}</span>
            </div>
        </nav>
    );
}

export default Navbar;
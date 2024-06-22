import "./App.css";
import React from "react";
import video from "./assets/onepiece.mp4";
import Menu from "./Components/Menu";
import Game from "./Components/Game";

import { useState } from "react";
function App() {
    const [game, setGame] = useState(false);
    const [gameDif, setGameDif] = useState("");

    const toggleGame = () => {
        setGameDif("");
        setGame(!game);
    };

    const difficulityClicked = (buttonText) => {
        toggleGame();
        setGameDif(buttonText);
    };

    return (
        <div className="app">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted></video>
            {game ? (
                <Game gameDif={gameDif} gameToggle={toggleGame}></Game>
            ) : (
                <Menu onClick={difficulityClicked}></Menu>
            )}
        </div>
    );
}

export default App;

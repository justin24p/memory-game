import "./App.css";
import React from "react";
import video from "./assets/onepiece.mp4";
import Menu from "./Components/Menu";
import Game from "./Components/Game";

import { useState, useEffect } from "react";
function App() {
    const [game, setGame] = useState(false);
    const [gameDif, setGameDif] = useState([]);

    const toggleGame = () => {
        setGame(!game);
    };
    // idea is useeffect as a side product of game loaded always pass difficulity prop
    // down to game and let use effect handle fetching data api etc
    const difficulityClicked = (buttonText) => {
        toggleGame();
        setGameDif(buttonText);
    };
    console.log(gameDif);
    return (
        <div className="app">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted></video>
            {game ? (
                <Game gameToggle={toggleGame}></Game>
            ) : (
                <Menu onClick={difficulityClicked}></Menu>
            )}
        </div>
    );
}

export default App;

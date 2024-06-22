import "./App.css";
import React from "react";
import video from "./assets/onepiece.mp4";
import Menu from "./Components/Menu";
import { useState, useEffect } from "react";
function App() {
    const [game, loadGame] = useState(false);
    const difficulityClicked = (buttonText) => {
        console.log(buttonText);
    };
    return (
        <div className="app">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted></video>
            <Menu onClick={difficulityClicked}></Menu>
        </div>
    );
}

export default App;

import "../App.css";
import img from "../assets/logo.png";
import { useState, useEffect } from "react";

import img1 from "./img/jin.png";
import img2 from "./img/brook.png";
import img3 from "./img/chopper.png";
import img4 from "./img/franky.png";
import img5 from "./img/kaido.png";
import img6 from "./img/luffy.png";
import img7 from "./img/nami.png";
import img8 from "./img/robin.png";
import img9 from "./img/sanji.png";
import img10 from "./img/zoro.png";
import Card from "./Card";

// only keep score for specific game run
export default function Game({ gameToggle, gameDif }) {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        initalizeCards();
    }, [gameDif]);

    function toggleCard(index) {
        let updatedCards = [...cards];
        updatedCards[index].value = !updatedCards[index].value;
        setCards(updatedCards);
    }
    const initalizeCards = () => {
        const imgArray = [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
        ];
        let numberOfCards;
        if (gameDif === "Easy") {
            numberOfCards = 5;
        }
        if (gameDif === "Medium") {
            numberOfCards = 7;
        }
        if (gameDif === "Hard") {
            numberOfCards = 10;
        }
        const initialCards = imgArray.slice(0, numberOfCards).map((src) => ({
            src: src,
            value: false,
        }));
        setCards(initialCards);
    };

    return (
        <div className="game">
            <div className="nav">
                <div className="img-container">
                    <img onClick={gameToggle} src={img} alt="" />
                </div>
                <div className="score-card">
                    <p>Score: {score}</p>
                    <p>Best Score: </p>
                </div>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        src={card.src}
                        value={card.value}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

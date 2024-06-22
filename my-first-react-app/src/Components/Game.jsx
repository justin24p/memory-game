import "../App.css";
import img from "../assets/logo.png";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

    function shuffleCards() {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [
                shuffledCards[j],
                shuffledCards[i],
            ];
        }
        setCards(shuffleCards);
    }

    function toggleCard(index) {
        // when i click a card it should randomly shuffle the cards
        // this should cause a rerender automtically since there state variables
        // also have the logic to check if the card was already true end game and show restart div
        let updatedCards = [...cards];
        updatedCards[index].value = !updatedCards[index].value;
        setCards(updatedCards);
    }
    function generateId() {}
    const initalizeCards = () => {
        // make it so it also generates an id for each card
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
        let displayedAmount;
        if (gameDif === "Easy") {
            numberOfCards = 5;
            displayedAmount = 3;
        }
        if (gameDif === "Medium") {
            numberOfCards = 7;
            displayedAmount = 4;
        }
        if (gameDif === "Hard") {
            numberOfCards = 10;
            displayedAmount = 5;
        }
        const initialCards = imgArray.slice(0, numberOfCards).map((src) => ({
            src: src,
            value: false,
            displayedAmount: displayedAmount,
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
                {cards.map(
                    (card, index) =>
                        index < card.displayedAmount && (
                            <Card
                                key={index}
                                src={card.src}
                                value={card.value}
                                index={index}
                            />
                        )
                )}
            </div>
        </div>
    );
}

// so now you have to make it when it renders card it renders any random cards from
// the card state array and no matter the difficulty only 5 at a time
// when you click on a card it will trigger the function passed down from game into
// card which will return the index assocaited with said event and tirgger a update the card
// and trigger a re render and shift order all random but at most 1 whose value is true

// new way
// just when clicked
// on a card do the thing to turn its value to true and check it
// was already true or else game over
// randomly shuffle cards and there should not be that edge case scenario
// instead of making key the index use uuid

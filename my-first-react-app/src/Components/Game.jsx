import "../App.css";
import img from "../assets/logo.png";
import { useState, useEffect } from "react";
import Lost from "./Lost";
import Won from "./Won";
import background from "./img/background.png";
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

export default function Game({ gameToggle, gameDif }) {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState([]);
    const [result, setResult] = useState("");
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

        // Ensure at least one unclicked card is in the displayed cards
        const unclickedCards = shuffledCards.filter((card) => !card.value);
        if (unclickedCards.length > 0) {
            const displayedAmount = shuffledCards[0].displayedAmount;
            const displayedCards = shuffledCards.slice(0, displayedAmount);

            if (displayedCards.every((card) => card.value)) {
                const firstUnclickedCard = unclickedCards[0];
                for (let i = 0; i < displayedCards.length; i++) {
                    if (displayedCards[i].value) {
                        displayedCards[i] = firstUnclickedCard;
                        break;
                    }
                }
            }
            setCards(shuffledCards);
        }
    }

    function toggleCard(index) {
        let updatedCards = [...cards];
        if (updatedCards[index].value) {
            setResult("lost");
        } else {
            updatedCards[index].value = !updatedCards[index].value;
            setScore(score + 1);
            setCards(updatedCards);
            shuffleCards();
            if (score + 1 === updatedCards.length) {
                setResult("won");
            }
        }
    }

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
                    <p>Best Score: {score}</p>
                </div>
            </div>
            <div className="card-container">
                {result === "won" && <Won></Won>}
                {result === "lost" && <Lost></Lost>}
                {result === "" &&
                    cards.map(
                        (card, index) =>
                            index < card.displayedAmount && (
                                <Card
                                    key={index}
                                    src={card.src}
                                    value={card.value}
                                    index={index}
                                    toggleCard={toggleCard}
                                />
                            )
                    )}
            </div>
        </div>
    );
}

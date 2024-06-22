import "../App.css";
import img from "../assets/logo.png";
export default function Game({ gameToggle }) {
    return (
        <div className="game">
            <div className="nav">
                <div className="img-container">
                    <img onClick={gameToggle} src={img} alt="" />
                </div>
                <div className="score-card">
                    <p>Score: </p>
                    <p>Best Score: </p>
                </div>
            </div>
        </div>
    );
}

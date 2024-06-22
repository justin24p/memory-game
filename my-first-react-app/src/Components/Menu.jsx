import "../App.css";
import logo from "../assets/logo.png";
export default function Menu({ onClick }) {
    const handleClick = (event) => {
        const buttonText = event.target.textContent;
        onClick(buttonText);
    };
    return (
        <div className="menu">
            <div className="content">
                <img src={logo} alt="" />
                <h1>Memory Game</h1>
                <div className="button-box">
                    <button onClick={handleClick}>Easy</button>
                    <button onClick={handleClick}>Medium</button>
                    <button onClick={handleClick}>Hard</button>
                </div>
            </div>
        </div>
    );
}

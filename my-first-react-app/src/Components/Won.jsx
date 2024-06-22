export default function Won({ gameToggle }) {
    return (
        <div className="won">
            <h1>You Won</h1>
            <button onClick={gameToggle}></button>
        </div>
    );
}

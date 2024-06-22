export default function Lost({ gameToggle }) {
    return (
        <div className="lost">
            <h1>You Lost</h1>
            <button onClick={gameToggle}>Restart</button>
        </div>
    );
}

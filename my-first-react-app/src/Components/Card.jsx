export default function Card({ src, value, index, toggleCard }) {
    const onclick = () => {
        toggleCard(index);
    };
    return (
        <div onClick={onclick} className="card">
            <img src={src} />
            <h1>{value}</h1>
            <h2>{index}</h2>
        </div>
    );
}

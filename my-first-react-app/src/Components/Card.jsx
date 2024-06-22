export default function Card({ src, value, index }) {
    return (
        <div className="card">
            <img src={src} />
            <h1>{value}</h1>
            <h2>{index}</h2>
        </div>
    );
}

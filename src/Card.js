
export default function Card(props) {
    return (
        <div className="travel-card">
            <img src={props.imageUrl} alt="" />
            <h1>{props.id}</h1>
        </div>
    )

}
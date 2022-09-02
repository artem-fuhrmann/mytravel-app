import './Card.css'
import path from './path.png'


export default function Card(props) {
    return (
        
        <div className="travel-card">
            <div className="image" style={{ backgroundImage: `url(${props.imageUrl})`}}></div>
            <div className='text-conteiner'>
                <div className="text-conteiner__header">
                    <img className="path" src={path} alt="" />
                    <p className="location-name">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="travel-date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )

}
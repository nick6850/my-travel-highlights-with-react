import locationIcon from '../location_icon.webp'

export default function Card(props){
    return (
        <div className="card">
            <img src={props.place.image} id='place-img' alt="place-img" />
            <div className="container">
                <div className="location">
                    <img src={locationIcon} id='location-icon' alt="location-icon" />
                    <div className="city">{props.place.city}</div>
                    <a href={props.place.mapLink}>View on Google Maps</a>
                </div>
                <h1 className="place">{props.place.location}</h1>
                <div className="date">{props.place.date}</div>
                <div className="description">{props.place.description}</div>
            </div>
        </div>
    )
}
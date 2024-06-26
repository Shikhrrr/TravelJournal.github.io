import React from 'react'
import icon from '/assets/location-icon.png'

export default function Card(props) {
    return (
        <div className='card' id={props.items.id}>
            <img src={props.items.imageUrl} alt="location pic" className='location--picture' />

            <div className="details">
                <p className='location'>
                    <img src={icon} className='location--icon' />
                    <span className='country'>{props.items.country.toUpperCase()}</span>
                    <a href={props.items.mapsLink} className='maplink' target='_blank'>View on Google Maps</a>
                </p>
                <h1 className='place--name'>{props.items.placeName}</h1>
                <h3 className='duration'>{props.items.tripDuration}</h3>
                <p className='description'>{props.items.description}</p>
            </div>
        </div>
    )
}
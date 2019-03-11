import React from 'react';

const TravelCard = props => {
    return (
        <div>
            <p>Location: {props.trip.location}</p>
            <p>Time Required: {props.trip.quantity} {props.trip.unit}</p>
            <p>Trip Terrain: {props.trip.trip_type}</p>
            <p>Trip Type: {props.trip.service_type}</p>
        </div>
    )
}


export default TravelCard;
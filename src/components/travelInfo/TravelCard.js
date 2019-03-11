import React from 'react';
import { Link } from 'react-router-dom';

const TravelCard = props => {
    return (
        <div key={props.trip.id}>
            <p>Location: {props.trip.location}</p>
            <p>Time Required: {props.trip.quantity} {props.trip.unit}</p>
            <p>Trip Terrain: {props.trip.trip_type}</p>
            <p>Trip Type: {props.trip.service_type}</p>

        </div>
    )
}


export default TravelCard;
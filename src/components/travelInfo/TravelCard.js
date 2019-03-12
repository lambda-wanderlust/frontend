import React from "react";

import { Link, Route } from "react-router-dom";

//<Link to={`/travel-info/experiences/${props.trip.id}`}>
const TravelCard = props => {
  return (
    <div>
      Trip: {props.trip}
      <p>Location: {props.trip.location}</p>
      <p>
        Time Required: {props.trip.quantity} {props.trip.units}
      </p>
      <p>Trip Terrain: {props.trip.trip_type}</p>
      <p>Trip Type: {props.trip.service_type}</p>
    </div>
  );
};

//</Link>
export default TravelCard;

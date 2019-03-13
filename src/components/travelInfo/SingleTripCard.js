import React from "react";
import Spinner from "../Spinner/Spinner.js";

const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;
  });
  function updateExp() {
    props.history.push(`/travel-info/update-exp/${id}`);
    // props.updatePickedTrip(trip.location, trip.quantity, trip.units, trip.trip_type, trip.service_type);
  }

  if (trip) {
    return (
      <div>
        <p>{trip.location}</p>
        <p>{trip.quantity}</p>
        <p>{trip.units}</p>
        <p>{trip.trip_type}</p>
        <p>{trip.service_type}</p>
        {props.guide ? (
          <button onClick={updateExp}>Update Experience</button>
        ) : null}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleTripCard;

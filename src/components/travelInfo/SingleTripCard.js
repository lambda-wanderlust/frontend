import React from "react";

const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;
  });

  return (
    <div>
      <p>{trip.location}</p>
      <p>{trip.quantity}</p>
      <p>{trip.units}</p>
      <p>{trip.trip_type}</p>
      <p>{trip.service_type}</p>
    </div>
  );
};

export default SingleTripCard;

import React from "react";

const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;
  });
  function updateExp() {
    props.history.push(`/update-exp/${id}`);
    
  }
  if (trip) {
    return (
      <div>
        <p>{trip.location}</p>
        <p>{trip.quantity}</p>
        <p>{trip.units}</p>
        <p>{trip.trip_type}</p>
        <p>{trip.service_type}</p>
        {props.guide ? <button onClick={updateExp}>Update Experience</button> : null}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }  
};

export default SingleTripCard;

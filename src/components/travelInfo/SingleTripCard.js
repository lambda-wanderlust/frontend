import React from "react";




const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;  
  });

  
  console.log(trip)
  console.log(props)

  return (
    <div>
      <p>{trip.id}</p>
    </div>
  );
};

export default SingleTripCard;

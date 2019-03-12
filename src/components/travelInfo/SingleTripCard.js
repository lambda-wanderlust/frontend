import React from "react";




const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;  
  });

  
  

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default SingleTripCard;

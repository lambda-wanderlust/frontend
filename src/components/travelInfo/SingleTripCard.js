import React from "react";


const SingleTripCard = props => {
  const { id } = props.match.params;
  console.log('id: ', id);
  const trip = props.trips.filter(thing => {
    console.log('thing.id: ',thing.id);
    return `${thing.id}` === id;  
  });
  
  console.log('trip: ', trip)
  console.log('trip: ', props.trip)
  console.log('props: ', props)

  return (
    <div>
      <p>{trip[0].id}</p>
    </div>
  );
};

export default SingleTripCard;

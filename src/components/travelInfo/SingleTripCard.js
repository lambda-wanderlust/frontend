import React from "react";

const SingleTripCard = props => {
<<<<<<< HEAD
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;
  });
  if (trip) {
=======
  


    const { id } = props.match.params;
    const trip = props.trips.find(thing => {
      return `${thing.id}` === id;
    });
  
    function updateExp() {
      props.history.push(`/update-exp/${id}`);
    }
  
>>>>>>> 9cadefe8b2c333aa97220bf49548eaf0d16bda06
    return (
      <div>
        <p>{trip.location}</p>
        <p>{trip.quantity}</p>
        <p>{trip.units}</p>
        <p>{trip.trip_type}</p>
        <p>{trip.service_type}</p>
<<<<<<< HEAD
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
=======
        {props.guide ? <button onClick={updateExp}>Update Experience</button> : null}
      </div>
  );
  
>>>>>>> 9cadefe8b2c333aa97220bf49548eaf0d16bda06
};

export default SingleTripCard;

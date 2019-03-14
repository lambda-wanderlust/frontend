import React from "react";
import Spinner from "../Spinner/Spinner.js";
import styled from 'styled-components';


const StyledButton = styled.button`
    font-size: 1.3rem;
`;

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
        <p>Location: {trip.location}</p>
        <p>Time Required: {trip.quantity} {trip.units}</p>
        <p>Trip Terrain: {trip.trip_type}</p>
        <p>Trip Type: {trip.service_type}</p>
        {props.guide ? (
          <StyledButton onClick={updateExp}>Update Experience</StyledButton>
        ) : null}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleTripCard;

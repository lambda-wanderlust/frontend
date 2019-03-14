import React from "react";
import Spinner from "../Spinner/Spinner.js";
import styled from "styled-components";
import jwt_decode from "jwt-decode";

const StyledButton = styled.button`
  font-size: 1.3rem;
`;

const SingleTripCard = props => {
  const { id } = props.match.params;
  const trip = props.trips.find(thing => {
    return `${thing.id}` === id;
  });
  function updateExp(e) {
    e.preventDefault();
    props.history.push(`/travel-info/update-exp/${id}`);
  }

  if (trip) {
    console.log(trip.trip_photo);
    return (
      <div>
        <div>
          <img
            src={`https://lambda-wanderlust-backend.herokuapp.com${
              trip.trip_photo
            }`}
            alt={trip.location}
          />
        </div>
        <p>Location: {trip.location}</p>
        <p>
          Time Required: {trip.quantity} {trip.units}
        </p>
        <p>Trip Terrain: {trip.trip_type}</p>
        <p>Trip Type: {trip.service_type}</p>
        {jwt_decode(localStorage.getItem("token")).role === "guide" ? (
          <StyledButton onClick={updateExp}>Update Experience</StyledButton>
        ) : null}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleTripCard;

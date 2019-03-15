import React from "react";
import Spinner from "../../Spinner/Spinner.js";
import jwt_decode from "jwt-decode";
import styles from './SingleTripCard.module.scss'

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
      <div className={styles.TripContainer}>
        <div className={styles.TripImgWrap}>
          <img className={styles.TripImg}
            src={`https://lambda-wanderlust-backend.herokuapp.com${
              trip.trip_photo
            }`}
            alt={trip.location}
          />
        </div>
        <p className={styles.TripP}>Location: {trip.location}</p>
        <p className={styles.TripP}>
          Time Required: {trip.quantity} {trip.units}
        </p>
        <p className={styles.TripP}>Trip Terrain: {trip.trip_type}</p>
        <p className={styles.TripP}>Trip Type: {trip.service_type}</p>
        {jwt_decode(localStorage.getItem("token")).role === "guide" ? (
          <button className={styles.SingleTripCardBtn} onClick={updateExp}>Update Experience</button>
        ) : null}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleTripCard;

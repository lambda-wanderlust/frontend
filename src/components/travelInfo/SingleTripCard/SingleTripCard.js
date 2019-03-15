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
      <div className={styles.Divwrapper}>
        <div className={styles.ImgDiv}>
          <img
            src={`https://lambda-wanderlust-backend.herokuapp.com${
              trip.trip_photo
            }`}
            alt={trip.location}
          />
        </div>
        <div className={styles.DescripDiv}>
          <p className={styles.PTags}>Location: {trip.location}</p>
          <p className={styles.PTags}>
            Time Required: {trip.quantity} {trip.units}
          </p>
          <p className={styles.PTags}>Trip Terrain: {trip.trip_type}</p>
          <p className={styles.PTags}>Trip Type: {trip.service_type}</p>
          <p className={styles.PTagsDescription}>Description: {trip.description}</p>
          {jwt_decode(localStorage.getItem("token")).role === "guide" ? (
            <button className={styles.SingleTripCardBtn} onClick={updateExp}>Update Experience</button>
          ) : null}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleTripCard;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./TravelCard.module.scss";

const TravelCard = props => {
  return (
    <div className={styles.DivWrapper}>
      <Link
        className={styles.Link}
        to={`/travel-info/experiences/${props.trip.id}`}
      >
        <div className={styles.ImgDiv}>
          <img
            src={`https://lambda-wanderlust-backend.herokuapp.com${
              props.trip.trip_photo
            }`}
            alt={props.trip.location}
          />
        </div>
        <div className={styles.DescripDiv}>
          <p className={styles.PTags}>Location: {props.trip.location} </p>
          <p className={styles.PTags}>
            Time Required: {props.trip.quantity} {props.trip.units}{" "}
          </p>
          <p className={styles.PTags}>Trip Terrain: {props.trip.trip_type} </p>
          <p className={styles.PTags}>Trip Type: {props.trip.service_type} </p>
          <p className={styles.PTagsDescription}>
            Description: {props.trip.description}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TravelCard;

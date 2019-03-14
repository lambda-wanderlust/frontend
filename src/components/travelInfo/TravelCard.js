import React from "react";
import { Link } from "react-router-dom";
import styles from "./TravelCard.module.scss";

const TravelCard = props => {
  return (
    <div className={styles.Div}>
      <Link to={`/travel-info/experiences/${props.trip.id}`}>
        <div>
          <img src={props.trip.img} alt="" />
        </div>
        <div>
          <p>Location: {props.trip.location} </p>
          <p>
            Time Required: {props.trip.quantity} {props.trip.units}{" "}
          </p>
          <p>Trip Terrain: {props.trip.trip_type} </p>
          <p>Trip Type: {props.trip.service_type} </p>
          <p>Trip Type: {props.trip.description} </p>
        </div>
      </Link>
    </div>
  );
};

export default TravelCard;

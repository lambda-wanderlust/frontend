import React from "react";

const Tourists = props => {
  return (
    <div>
      <p>Location: {props.location}</p>
      <p>Quantity: {props.quantity}</p>
      <p>Units: {props.units}</p>
      <p>Type of Trip: {props.trip_type}</p>
      <p>Type of Service: {props.service_type}</p>
    </div>
  );
};

export default Tourists;

//dummy data format
//{
//location:  "Grand Canyon", //required
//quantity:  1,
//units:  "day",
//trip_type: "sightseeing",
//service_type: "professional",
//user_id: 38
//},

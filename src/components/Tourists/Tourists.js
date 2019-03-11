import React from "react";
import axios from "axios";

class Tourists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      quantity: "",
      units: "",
      trip_type: "",
      service_type: "",
      user_id: ""
    };
  }

  componentDidMount() {
    axios.get();
  }
  render() {
    return (
      <div>
        <p>Location: {this.state.location}</p>
        <p>Quantity: {this.state.quantity}</p>
        <p>Units: {this.state.units}</p>
        <p>Type of Trip: {this.state.trip_type}</p>
        <p>Type of Service: {this.state.service_type}</p>
      </div>
    );
  }
}

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

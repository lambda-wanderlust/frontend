import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import TravelCard from "./TravelCard";
import CreateExp from "./CreateExp";
import SingleTripCard from "./TravelCard.js";

class TravelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        {
          id: 0,
          units: 1,
          location: "test",
          quantity: 2,
          trip_type: "test",
          service_type: ""
        }
      ]
    };
  }

  //componentDidMount() {
  //axios
  //.get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
  //.then(res => {
  //console.log(res.data);
  //this.setState({ trips: res.data });
  //})
  //.catch(err => {
  //console.log(err);
  //});
  //}

  render() {
    return (
      <div>
        {this.state.trips.map(trip => {
          return <TravelCard key={trip.id} trip={trip} />;
        })}
        <Route path="/travel/info/experiences/:id" component={SingleTripCard} />
        {/*TESTING TO BE REMOVED*/}
        <CreateExp />
      </div>
    );
  }
}

export default TravelInfo;

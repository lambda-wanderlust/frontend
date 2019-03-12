import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import TravelCard from "./TravelCard";
import CreateExp from "./CreateExp";
import SingleTripCard from "./SingleTripCard";

class TravelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    axios
      .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
      .then(res => {
        console.log(res.data);
        this.setState({ trips: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/travel-info"
          render={props => {
            return this.state.trips.map(trip => {
              return <TravelCard key={trip.id} trip={trip} />;
            });
          }}
        />
        <Route
          path="/travel-info/experiences/:id"
          render={props => {
            return <SingleTripCard {...props} trips={this.state.trips} />;
          }}
        />
      </div>
    );
  }
}

export default TravelInfo;

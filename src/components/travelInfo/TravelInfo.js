import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import TravelCard from "./TravelCard";
import CreateExp from "./CreateExp";
import UpdateExp from "./UpdateExp";

class TravelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        {
          id: 1,
          location: "Paintbrush Canyon, Grand Teton National Park",
          quantity: 3,
          units: "days",
          trip_type: "mountain adventure",
          service_type: "professional",
          user_id: 4
        },
        {
          id: 2,
          location: "Lake Okeechobee",
          quantity: 8,
          units: "hours",
          trip_type: "guided bass fishing",
          service_type: "professional",
          user_id: 3
        },
        {
          id: 3,
          location: "Catalina Island",
          quantity: 3,
          units: "hour",
          trip_type: "guided boat tour - sightseeing",
          service_type: "professional",
          user_id: 10
        },
        {
          id: 4,
          location: "Catalina Island",
          quantity: 8,
          units: "hours",
          trip_type: "guided boat tour - fishing",
          service_type: "professional",
          user_id: 10
        },
        {
          id: 5,
          location: "New Orleans",
          quantity: 3,
          units: "hours",
          trip_type: "guided city tour",
          service_type: "private",
          user_id: 9
        },
        {
          id: 6,
          location: "New Orleans Famous Graveyards",
          quantity: 1,
          units: "day",
          trip_type: "guided tour",
          service_type: "private",
          user_id: 9
        },
        {
          id: 7,
          location: "New York City",
          quantity: 1,
          units: "day",
          trip_type: "sightseeing",
          service_type: "professional",
          user_id: 6
        },
        {
          id: 8,
          location: "Statue of Liberty",
          quantity: 4,
          units: "hours",
          trip_type: "sightseeing",
          service_type: "professional",
          user_id: 6
        },
        {
          id: 9,
          location: "Cascade Canyon Trail",
          quantity: 3,
          units: "days",
          trip_type: "hiking adventure",
          service_type: "professional",
          user_id: 4
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
      .then(res => {
        // console.log(res.data);
        this.setState({ trips: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.trips.map(trip => {
          return <TravelCard key={trip.id} trip={trip} />;
        })}
        <Route path="/guides/createexp" component={CreateExp} />
        <Route path="/guides/updateexp/:id" component={UpdateExp} />
        {/*TESTING TO BE REMOVED*/}
        <CreateExp />
      </div>
    );
  }
}

export default TravelInfo;

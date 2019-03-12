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
        {this.state.trips.map(trip => {
          return <TravelCard key={trip.id} trip={trip} />;
        })}
        <Route path="/guides/createexp" component={CreateExp} />
        <Route path="/guides/updateexp" component={UpdateExp} />
      </div>
    );
  }
}

export default TravelInfo;

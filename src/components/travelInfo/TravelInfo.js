import React from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import TravelCard from "./TravelCard";
import SingleTripCard from "./SingleTripCard";
import UpdateExp from "./UpdateExp";

class TravelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      pickedTrip: {
        location: "",
        quantity: "",
        units: "",
        trip_type: "",
        service_type: ""
      }
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

  createExperience = () => {
    console.log(this.props);
    this.props.history.push("/create-exp");
  };

  updatePickedTrip = (location, quantity, units, trip_type, service_type) => {
    //     console.log(this.state);
    //     this.setState(prevState => {
    //         console.log(prevState.pickedTrip);
    //         return({
    //             ...prevState,
    //             pickedTrip: {
    //                 location: location,
    //                 quantity: quantity,
    //                 units: units,
    //                 trip_type: trip_type,
    //                 service_type: service_type,
    //             }
    //         }
    //         )
    //     })
  };

  render() {
    // console.log(this.props.props.guide);
    return (
      <div>
        <input type="text" name="search" onChange={this.handleChange} />
        {this.props.props.guide ? (
          <button onClick={this.createExperience}>Create Experience</button>
        ) : null}
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
            return (
              <SingleTripCard
                {...props}
                trips={this.state.trips}
                guide={this.props.props.guide}
                updatePickedTrip={this.updatePickedTrip}
              />
            );
          }}
        />
        <Route
          path="/travel-info/update-exp/:id"
          render={props => {
            return <UpdateExp {...props} trips={this.state.trips} />;
          }}
        />
      </div>
    );
  }
}

export default withRouter(TravelInfo);

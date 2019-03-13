import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import TravelCard from "./TravelCard";
import SingleTripCard from "./SingleTripCard";

class TravelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

<<<<<<< HEAD
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
    console.log(this.props.props.guide);
    return (
      <div>
        {this.props.props.guide ? <button>Create Expereince</button> : null}
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
=======
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

    createExperience = () => {
        console.log(this.props)
        this.props.history.push("/create-exp");
    }

    render() {
        console.log(this.props.props.guide);
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    onChange={this.handleChange}

                />
                {this.props.props.guide ? <button onClick={this.createExperience}>Create Experience</button> : null}
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
                        return <SingleTripCard {...props} trips={this.state.trips} guide={this.props.props.guide} />;
                    }}
                />
            </div>
        );
    }
>>>>>>> 9cadefe8b2c333aa97220bf49548eaf0d16bda06
}

export default TravelInfo;

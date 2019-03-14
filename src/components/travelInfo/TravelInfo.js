import React from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import TravelCard from "./TravelCard";
import SingleTripCard from "./SingleTripCard";
import UpdateExp from "./UpdateExp";
import styled from 'styled-components';

const CardWrapper = styled.div`
    border: 2px solid black;
    margin: 10px;
`;

const StyledButton = styled.button`
    font-size: 1.3rem;
`;

const StyledInput = styled.input`
    font-size: 1.3rem;
`;

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
      },
      search: '',
      filteredTrips: []
    };
  }

  componentDidMount() {
    axios
      .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
      .then(res => {
        // console.log(res.data);
        this.setState({ trips: res.data, filteredTrips: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createExperience = () => {
    console.log(this.props);
    this.props.history.push("/create-exp");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  searchHandler = e => {
    console.log("search Handler Running");
    const searchInput = this.state.search.toLowerCase();
    const searchResults = [];
    this.state.trips.forEach(trip => {
      if (trip.location.toLowerCase().search(`${searchInput}`) >= 0 ) {
        searchResults.push(trip);
      } else if (trip.trip_type.toLowerCase().search(`${searchInput}`) >= 0 ){
        searchResults.push(trip);
      } else if (trip.service_type.toLowerCase().search(`${searchInput}`) >= 0 ){
        searchResults.push(trip);
      } else if (`${trip.quantity}` === searchInput ){
        searchResults.push(trip);
      } else if (trip.units.toLowerCase().search(`${searchInput}`) >= 0) {
        searchResults.push(trip);
      }
    });
    console.log(searchResults);
    this.setState({ filteredTrips: [...searchResults]})
  }

  resetFilter = e => {
    this.setState({filteredTrips: this.state.trips});
  }

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
      <div className="travel-info-container">
        <div className="search-bar">
          <div className="search-form">
            <StyledInput type="text" name="search" onChange={this.handleChange} onSubmit={this.searchHandler} placeholder="Search for a trip"/>
            <StyledButton onClick={this.searchHandler}>Search</StyledButton>
            <StyledButton onClick={this.resetFilter}>Reset</StyledButton>
          </div>
          {this.props.props.guide ? (
            <StyledButton onClick={this.createExperience}>Create Experience</StyledButton>
          ) : null}
        </div>
        <Route
          exact
          path="/travel-info"
          render={props => {
            return this.state.filteredTrips.map(trip => {
              return (
                <CardWrapper key={trip.id}>
                    <TravelCard key={trip.id} trip={trip} />
                </CardWrapper>
              );
            });
          }}
        />
        <Route
          path="/travel-info/experiences/:id"
          render={props => {
            return (
                <CardWrapper key={Date.now()}>
                    <SingleTripCard
                        {...props}
                        trips={this.state.trips}
                        guide={this.props.props.guide}
                        updatePickedTrip={this.updatePickedTrip}
                    />
                </CardWrapper>
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

import React from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import TravelCard from "./TravelCard/TravelCard";
import SingleTripCard from "./SingleTripCard/SingleTripCard";
import UpdateExp from "./UpdateExp/UpdateExp";
import SearchForm from "./SearchForm/SearchForm";
import jwt_decode from "jwt-decode";

import styles from "./TravelInfo.module.scss";

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
        service_type: "",
        trip_photo: ""
      },
      search: "",
      filteredTrips: [],
      numTripsToDisplay: 5
    };
  }

  componentDidMount() {
    this.populateArray();
  }

  populateArray = () => {
    axios
      .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        // console.log(res.data);
        this.setState({ trips: res.data, filteredTrips: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  createExperience = () => {
    console.log(this.props);
    this.props.history.push("/create-exp");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchHandler = e => {
    // console.log("search Handler Running");
    const searchInput = this.state.search.toLowerCase();
    const searchResults = [];
    this.state.trips.forEach(trip => {
      if (trip.location.toLowerCase().search(`${searchInput}`) >= 0) {
        searchResults.push(trip);
      } else if (trip.trip_type.toLowerCase().search(`${searchInput}`) >= 0) {
        searchResults.push(trip);
      } else if (
        trip.service_type.toLowerCase().search(`${searchInput}`) >= 0
      ) {
        searchResults.push(trip);
      } else if (`${trip.quantity}` === searchInput) {
        searchResults.push(trip);
      } else if (trip.units.toLowerCase().search(`${searchInput}`) >= 0) {
        searchResults.push(trip);
      } else if (trip.description.toLowerCase().search(`${searchInput}`) >= 0) {
        searchResults.push(trip);
      }
    });
    // console.log(searchResults);
    this.setState({ filteredTrips: [...searchResults] });
  };

  resetFilter = e => {
    this.setState({ filteredTrips: this.state.trips });
  };

  loadMore = e => {
    this.setState(prevState => ({
      ...prevState,
      numTripsToDisplay: prevState.numTripsToDisplay + 6
    }));
    console.log(this.state.numTripsToDisplay);
  };

  logOut = e => {
    localStorage.removeItem("token");
    this.setState({
      trips: [],
      pickedTrip: {
        location: "",
        quantity: "",
        units: "",
        trip_type: "",
        service_type: "",
        trip_photo: "",
      },
      search: "",
      filteredTrips: []
    });
    this.props.history.push("/");
  };

  render() {
    console.log("travel props", this.populateArray);
    return (
      <div className={styles.TravelInfoContainer}>
        <div className={styles.SearchBar}>
          <button className={styles.LogOut} onClick={this.logOut}>Log Out</button>
          <Route
            exact
            path="/travel-info"
            render={props => {
              return (
                <SearchForm
                  {...this.state}
                  resetFilter={this.resetFilter}
                  searchHandler={this.searchHandler}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          {jwt_decode(localStorage.getItem("token")).role === "guide" ? (
            <button className={styles.CreateExpBtn} onClick={this.createExperience}>
              Create Experience
            </button>
          ) : null}
        </div>
        <div className={styles.CardContainer}>
          <Route
            exact
            path="/travel-info"
            render={props => {
              return this.state.filteredTrips.map((trip, index) => {
                if (index > this.state.numTripsToDisplay) {
                  return null;
                }
                return (
                  <div className={styles.CardWrapper} key={trip.id}>
                    <TravelCard
                      key={trip.id}
                      trip={trip}
                      populateArray={this.populateArray}
                    />
                  </div>
                );
              });
            }}
          />
        </div>

        <Route
          exact
          path="/travel-info/"
          render={props => (
            <button className={styles.LoadBtn} {...props} onClick={this.loadMore}>
              Load More
            </button>
          )}
        />
        <Route
          path="/travel-info/experiences/:id"
          render={props => {
            return (
              <div className={styles.CardWrapper} key={Date.now()}>
                <SingleTripCard
                  {...props}
                  trips={this.state.trips}
                  guide={this.props.props.guide}
                />
              </div>
            );
          }}
        />
        <Route
          path="/travel-info/update-exp/:id"
          render={props => {
            return (
              <UpdateExp
                {...props}
                trips={this.state.trips}
                populateArray={this.populateArray}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default withRouter(TravelInfo);

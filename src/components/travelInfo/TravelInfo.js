import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import TravelCard from "./TravelCard";
import CreateExp from "./CreateExp";


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
                {/*TESTING TO BE REMOVED*/}
                <CreateExp />
            </div>
        );
    }
}

export default TravelInfo;

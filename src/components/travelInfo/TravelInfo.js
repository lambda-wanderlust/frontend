import React from "react";
import axios from "axios";
import { Route, Link } from 'react-router-dom';
import TravelCard from "./TravelCard";
import CreateExp from './CreateExp';
import UpdateExp from './UpdateExp';

class TravelInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
        };
    }

    componentDidMount() {
        axios
            .get('https://lambda-wanderlust-backend.herokuapp.com/api/trips')
            .then(res => {
                console.log(res)
                // this.SetState({ trips: res })
            })
            .catch(err => {
                console.log(err)
            })
    }
  
    render() {
        return (
            <div>
                {this.state.trips.map(trip => {
                    return (
                        <TravelCard
                            trip={trip}
                        />
                    )
                })}
                <Route path="/guides/createexp" component={CreateExp} />
                <Route path="/guides/updateexp/:id" component={UpdateExp} />
            </div>
        );
    }
}

export default TravelInfo;
import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import { Route } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";

import CreateAccountForm from "./components/createAccount/CreateAccountForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={RouteLogin} />
        <Route exact path="/create-user-form" component={CreateAccountForm} />
        <Route exact path="/travel-info" component={TravelInfo} />
      </div>
    );
  }
}

export default App;

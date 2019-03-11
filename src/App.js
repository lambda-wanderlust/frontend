import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import TravelInfo from "./components/travelInfo/TravelInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteLogin />
        <TravelInfo />
      </div>
    );
  }
}

export default App;

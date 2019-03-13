import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import { Route } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";
import UpdateExp from "./components/travelInfo/UpdateExp";
import CreateAccountForm from "./components/createAccount/CreateAccountForm";
import CreateExp from "./components/travelInfo/CreateExp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guide: false,
      user_id: '',
    }
  }

  userLogin = (guide, id) => {
    this.setState({
      guide: guide,
      user_id: id,
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => { return <RouteLogin props={this.state} userLogin={this.userLogin}/> }} />
        <Route path="/create-user-form" render={(props) => { return <CreateAccountForm props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/travel-info" render={(props) => { return <TravelInfo {...props} props={this.state} /> }} />
        <Route path="/create-exp" component={CreateExp} />
        <Route path="/update-exp/:id" component={UpdateExp} />
      </div>
    );
  }
}

export default App;
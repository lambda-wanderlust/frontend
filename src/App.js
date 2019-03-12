import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import { Route } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";

import CreateAccountForm from "./components/createAccount/CreateAccountForm";

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
<<<<<<< HEAD
        <Route exact path="/" component={RouteLogin} />
        <Route exact path="/create-user-form" component={CreateAccountForm} />
        <Route exact path="/travel-info" component={TravelInfo} />
=======
        <Route exact path="/" render={(props) => {
          return <RouteLogin props={this.state} userLogin={this.userLogin}/>
        }} />
        <Route exact path="/create-user-form" render={(props) => {
          return <CreateAccountForm />
        }} />
        <TravelInfo />
>>>>>>> 2951a24b23d540de4dd7da37622fe80ddbbef40d
      </div>
    );
  }
}

export default App;

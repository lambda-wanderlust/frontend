import React, { Component } from "react";
import RouteLogin from "./components/travelInfo/RouteLogin/RouteLogin";
import { Route } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";
import CreateAccountForm from "./components/createAccount/CreateAccountForm";
import CreateExp from "./components/travelInfo/CreateExp";
import styles from './App.module.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
    }
  }

  userLogin = (id) => {
    this.setState({
      user_id: id,
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <Route exact path="/" render={(props) => { return <RouteLogin props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/create-user-form" render={(props) => { return <CreateAccountForm props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/travel-info" render={(props) => { return <TravelInfo {...props} props={this.state} /> }} />
        <Route path="/create-exp" component={CreateExp} />
      </div>
    );
  }
}

export default App;

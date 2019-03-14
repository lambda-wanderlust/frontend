import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import { Route, Link } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";
import CreateAccountForm from "./components/createAccount/CreateAccountForm";
import CreateExp from "./components/travelInfo/CreateExp";
import styled from 'styled-components'



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
      <Div className="App">
        <Route exact path="/" render={(props) => { return <RouteLogin props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/create-user-form" render={(props) => { return <CreateAccountForm props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/travel-info" render={(props) => { return <TravelInfo {...props} props={this.state} /> }} />
        <Route path="/create-exp" component={CreateExp} />
      </Div>
    );
  }
}

const Div = styled.div `
font-family:'Josefin Sans', sans-serif;
border-radius: 15px;
margin: 5% 10%;
box-shadow: 1px 1px 2.5px 3px rgba(0,0,0,.5);
`;

export default App;

import React, { Component } from "react";
import "./App.css";
import RouteLogin from "./components/RouteLogin";
import { Route } from "react-router-dom";
import TravelInfo from "./components/travelInfo/TravelInfo";
import CreateAccountForm from "./components/createAccount/CreateAccountForm";
<<<<<<< HEAD
import styled from 'styled-components'


=======
import CreateExp from "./components/travelInfo/CreateExp";
>>>>>>> 18d69fe2b09ef7999988ee1a61fcf7b0cf7c8fc2

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
<<<<<<< HEAD
      <Div className="App">
        <Route exact path="/" render={(props) => { return <RouteLogin props={this.state} userLogin={this.userLogin}/> }} />
        <Route path="/create-user-form" render={(props) => { return <CreateAccountForm props={this.state} /> }} />
        <Route path="/travel-info" render={(props) => { return <TravelInfo props={this.state} /> }} />
      </Div>
=======
      <div className="App">
        <Route exact path="/" render={(props) => { return <RouteLogin props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/create-user-form" render={(props) => { return <CreateAccountForm props={this.state} userLogin={this.userLogin} /> }} />
        <Route path="/travel-info" render={(props) => { return <TravelInfo {...props} props={this.state} /> }} />
        <Route path="/create-exp" component={CreateExp} />
      </div>
>>>>>>> 18d69fe2b09ef7999988ee1a61fcf7b0cf7c8fc2
    );
  }
}

const Div = styled.div `
font-family:'Josefin Sans', sans-serif;
margin:0 10%;
box-shadow: 1px 1px 2.5px 3px rgba(0,0,0,.5);
}
`

export default App;
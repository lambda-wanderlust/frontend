import React, { Component } from 'react';
import './App.css';
import RouteLogin from './components/RouteLogin';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import CreateAccountForm from './components/createAccount/CreateAccountForm';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={RouteLogin}/>
        <Route exact path="/create-user-form" component={CreateAccountForm} />
      </div>
    );
  }
}

export default App;

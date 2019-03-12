import React from "react";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./createAccount/CreateAccountForm";
import { Link } from 'react-router-dom';

const RouteLogin = props => {
  return (
    <div>
      <h1>Wanderlust!</h1>
      <LoginForm props={props}/>
      <Link to="/create-user-form">Create New Account</Link>
    </div>
  );
};

export default RouteLogin;

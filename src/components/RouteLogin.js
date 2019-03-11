import React from "react";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./createAccount/CreateAccountForm";
// import CreateAccountForm from './createAccount/CreateAccountForm';
import { Link } from 'react-router-dom';

const RouteLogin = props => {
  return (
    <div>
      <h1>Wanderlust!</h1>
      <LoginForm />
      <LoginButton loginButtonText="Tourist" />
      <LoginButton loginButtonText="Guide" />
      {/* <Link to="">Create New Account</Link> */}
      <Link to="/create-user-form">Create New Account</Link>
    </div>
  );
};

export default RouteLogin;

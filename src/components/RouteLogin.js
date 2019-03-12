import React from "react";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';

const RouteLogin = props => {
  return (
    <div>
      <h1>Wanderlust!</h1>
      <LoginForm />
      <Link to="/create-user-form">Create New Account</Link>
    </div>
  );
};

export default RouteLogin;

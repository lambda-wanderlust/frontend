import React from 'react';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';
import CreateAccountForm from './createAccount/CreateAccountForm';

const RouteLogin = props => {
  return (
    <div>
      <h1>Wanderlust!</h1>
      <LoginForm />
      <LoginButton loginButtonText="Tourist" />
      <LoginButton loginButtonText="Guide" />
      {/* <Link to="">Create New Account</Link> */}
      <CreateAccountForm />
    </div>
  )
}

export default RouteLogin;
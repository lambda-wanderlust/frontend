import React from 'react';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';
import CreateAccountForm from './createAccount/CreateAccountForm';

const RouteLogin = props => {
<<<<<<< HEAD
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
=======
    return (
        <div>
            <h1>Wanderlust!</h1>
            <LoginForm />
            <LoginButton  loginButtonText="Tourist"/>
            <LoginButton  loginButtonText="Guide"/>
        </div>
    )
>>>>>>> 9265a92aaf58ff77db82abeb4e40de9e6514bfd5
}

export default RouteLogin;
import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from 'react-router-dom';
import styles from './RouteLogin.module.scss'


const RouteLogin = props => {
  return (
    <div className={styles.RouteLoginDiv}>
      <h1 className={styles.HeaderOne}>Wanderlust!</h1>
      <LoginForm props={props} />
      <Link className={styles.Link} to="/create-user-form">Create New Account</Link>
    </div>
  );
};

export default RouteLogin;








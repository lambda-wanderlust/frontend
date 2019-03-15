import React from "react";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import styles from './RouteLogin.module.scss'


const RouteLogin = props => {
  return (
    <Div>
      <HeaderOne>Wanderlust!</HeaderOne>
      <LoginForm props={props} />
      <Link className={styles.Link} to="/create-user-form">Create New Account</Link>
    </Div>
  );
};

export default RouteLogin;

const Div = styled.div`
background: #247291;
border-radius: 10px;   
width: auto;        
max-width: 100%;
padding-bottom: 20px;
`;

const HeaderOne = styled.h1`
padding: 2%;
border-radius: 10px 10px 0 0;
background:#F7D95B; 
font-size: 5rem;
color: #247291;
`;






import React from "react";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const RouteLogin = props => {
  return (
    <Div>
      <HeaderOne>Wanderlust!</HeaderOne>
      <LoginForm props={props} />
      <Link to="/create-user-form">Create New Account</Link>
    </Div>
  );
};

export default RouteLogin;

const Div = styled.div`
background: #247291;
border-radius: 15px;            
`;

const HeaderOne = styled.h1`
padding: 2%;
border-radius: 10px 10px;
background:#F7D95B; 
font-size: 3rem;
color: #247291;
`;


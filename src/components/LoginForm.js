import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';

const StyledButton = styled.button`
    font-size: 1.3rem;
    width: 100px;
    margin: 5px auto;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    margin: 5px auto;
    font-size: 1.3rem;
    text-align: center;
    width: 300px;
`;

const StyledLabel = styled.label`
    font-size: 1.3rem;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })

  }

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    axios.post('https://lambda-wanderlust-backend.herokuapp.com/api/accounts/login', user)
    .then(res => {
      // console.log(res);
      localStorage.setItem('token', res.data.token);
      const guide = jwt_decode(localStorage.getItem('token')).role === 'tourist' ? false : true;
      const id = res.data.id;
      this.props.props.userLogin(guide, id);
      this.props.history.push('/travel-info');
      })
      .catch(err => {
        // console.log(err.message);
        if (err.message === "Request failed with status code 401"){
          alert("Incorrect password, please try again");
        } 
        if (err.message === "Request failed with status code 404"){
          alert("Username not found.  If you don't have a username, please create one");
        }
      })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <StyledDiv>
          <StyledLabel>Username: </StyledLabel>
          <StyledInput
            type="text"
            placeholder='Username...'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <StyledLabel>Password: </StyledLabel>
          <StyledInput
            type="password"
            placeholder='Password'
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <StyledButton>Login</StyledButton>
        </StyledDiv>
      </form>
    )
  }
}

export default withRouter(LoginForm);
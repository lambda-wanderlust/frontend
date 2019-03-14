import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1.3rem;
`;

const StyledInput = styled.input`
    font-size: 1.3rem;
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
      console.log(res);
      const guide = res.data.role === 'tourist' ? false : true;
      const id = res.data.id;
      this.props.props.userLogin(guide, id);
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/travel-info');
      })
      .catch(err => {
        console.log(err.message);
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

        <StyledLabel>Username</StyledLabel>
        <StyledInput
          type="text"
          placeholder='Username...'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          required
        />

        <StyledLabel>Password</StyledLabel>
        <StyledInput
          type="password"
          placeholder='Password'
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <StyledButton>Login</StyledButton>

      </form>
    )
  }
}

export default withRouter(LoginForm);
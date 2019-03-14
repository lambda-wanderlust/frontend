import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styled from 'styled-components'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    console.log('user: ', user);
    axios.post('https://lambda-wanderlust-backend.herokuapp.com/api/accounts/login', user)
    .then(res => {
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/travel-info');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    return (
      <Form onSubmit={this.onSubmit}>

        <Label>Username</Label>
        <Input
          type="text"
          placeholder='Username...'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          required
        />

        <Label>Password</Label>
        <Input
          type="password"
          placeholder='Password'
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <Button>Login</Button>

      </Form>
    )
  }
}


const Form= styled.form`
height: 50vh;
font-family: 'Josefin Sans', sans-serif;
margin: 5% 5% 0 5%;
background: #247291;
display:flex;
flex-direction: column;
border-radius: 5px;
align-items: center;

`
const Label = styled.label`
font-size: 1.5rem;
margin: .5rem;
color: #F7D95B;
`
const Input = styled.input`
font family: 'Josefin Sans', sans-serif;
font-size: 1.5rem;
border-radius: 5px;

`
const Button = styled.button`
color: #247291;
background: #F7D95B;
text-transform: uppercase;
padding: 10px 30px;
border-radius: 10px;
border: none;
text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
margin: 10px 0;

`



export default withRouter(LoginForm);
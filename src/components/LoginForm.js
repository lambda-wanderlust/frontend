import React from 'react';
import axios from 'axios';

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
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>

        <label>Username</label>
        <input
          type="text"
          placeholder='Username...'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder='Password'
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <button>Login</button>

      </form>
    )
  }
}

export default LoginForm;
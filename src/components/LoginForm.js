import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    return (
      <form>

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

        {/* <h2>{props.userType === Guide ? "Guide" : "Tourist"}</h2> */}

      </form>
    )
  }
}

export default LoginForm;
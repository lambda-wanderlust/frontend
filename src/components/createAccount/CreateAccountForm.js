import React from 'react';

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

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
        <button>Submit</button>

      </form>
    )
  }
}

export default CreateAccountForm;
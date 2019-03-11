import React from 'react';
import axios from 'axios';

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: '',
        password: '',
        name: '',
        role: '',
        email: '',
        phone: '',
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    // axios.post('https://lambda-wanderlust-backend.herokuapp.com/', this.state.newUser)
    // .then(res => {

    // })
    // .catch(err => {
    //   console.log(err);
    // })
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
        
        <label>Name</label>
        <input
          type="name"
          placeholder='John Smyth'
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder='email@example.com'
          name="name"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          placeholder='email@example.com'
          name="name"
          value={this.state.phone}
          onChange={this.handleChange}
          required
        />

        <label>Are you a guide?
          <input type="checkbox"/>
        </label>

        <button>Submit</button>

      </form>
    )
  }
}

export default CreateAccountForm;
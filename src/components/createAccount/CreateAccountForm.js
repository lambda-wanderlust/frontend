import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      role: '',
      email: '',
      phone: '',
      guide: false,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCheckBoxChange = e => {
    this.setState(prevState => ({...prevState, guide: !this.state.guide}))
  }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.guide === true ? "guide" : "user",
    }
    axios.post('https://lambda-wanderlust-backend.herokuapp.com/api/accounts/register', newUser)
    .then(res => {
      const guide = res.data.role === 'tourist' ? false : true;
      const id = res.data.id;
      // console.log(res.data);
      this.props.userLogin(guide, id);
      localStorage.setItem('token', res.data.token);
      
      this.props.history.push('/travel-info');
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>

        <label>Username
          <input
            type="text"
            placeholder='Username...'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>Password
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>Name
          <input
            type="name"
            placeholder='John Smyth'
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>Email
          <input
            type="email"
            placeholder='email@example.com'
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>Phone
          <input
            type="phone"
            placeholder='555-555-1234'
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>Are you a guide?
          <input type="checkbox" name="guide" onChange={this.handleCheckBoxChange} value={this.state.guide} />
        </label>

        <button>Submit</button>

      </form>
    )
  }
}

export default withRouter(CreateAccountForm);
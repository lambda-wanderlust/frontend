import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styles from './LoginForm.module.scss';
import jwt_decode from 'jwt-decode';

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
      <form className={styles.LoginForm} onSubmit={this.onSubmit}>
        <label className={styles.LoginLabel}>Username: </label>
          <input
          className={styles.LoginInput}
            type="text"
            placeholder='Username...'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

        <label className={styles.LoginLabel}>Password: </label>
          <input
          className={styles.LoginInput}
            type="password"
            placeholder='Password'
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

        <button className={styles.LoginBtn}>Login</button>
      </form>
    )
  }
}


export default withRouter(LoginForm);
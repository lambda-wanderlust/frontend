import React from 'react';
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";
import styles from './CreateAccountForm.module.scss';

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
      error: '',
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
      if (res.data.message === "That user already exists!" ){
        alert("Username already exists, please try again with a different user");
      } else {
        const guide = res.data.role === 'tourist' ? false : true;
        const id = res.data.id;
        console.log(res.data);
        this.props.userLogin(guide, id);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/travel-info');
      }
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }

  render() {
    return (
      <>
        <form className={styles.CreateForm} onSubmit={this.onSubmit}>
            <h2 className={styles.headerTwo}>Create An Account</h2>
            <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Username:
                </label>
                <input
                  className={styles.CreateFormInput}
                  type="text"
                  placeholder="Username..."
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                  />
            </div>
          <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Password:
              </label>
              <input
                className={styles.CreateFormInput}
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                />
            </div>

          <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Name:
                </label>
                <input
                  className={styles.CreateFormInput}
                  type="name"
                  placeholder="John Smyth"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                  />
            </div>

            <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Email:
                </label>
                <input
                  className={styles.CreateFormInput}
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  />
            </div>

            <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Phone:
                </label>
                <input
                  className={styles.CreateFormInput}
                  type="phone"
                  placeholder="555-555-1234"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  required
                  />
            </div>
            <div className={styles.InputWrapper}>
              <label className={styles.CreateFormLabels}>
                Are you a guide?
                </label>
                <input
                  className={styles.CreateFormInput}
                  type="checkbox"
                  name="guide"
                  onChange={this.handleCheckBoxChange}
                  value={this.state.guide}
                  />
            </div>
            <div className={styles.CreateFormBtns}>
              <button className={styles.CreateFormBtn}>Submit</button>
              <Link className={styles.CreateFormBtn} to="/">Back</Link>
            </div>
        </form>
      </>
    );
  }
}

export default withRouter(CreateAccountForm);
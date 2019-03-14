import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const StyledButton = styled.button`
    font-size: 1.3rem;
    width: 100px;
    margin: 5px auto;
    
`;

const StyledInput = styled.input`
    font-size: 1.3rem;
    margin: 5px;
`;

const StyledLabel = styled.label`
    font-size: 1.3rem;
`;

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
        <StyledDiv>
        <StyledLabel>Username: 
          <StyledInput
            type="text"
            placeholder='Username...'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>Password: 
          <StyledInput
            type="password"
            placeholder='Password'
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>Name: 
          <StyledInput
            type="name"
            placeholder='John Smyth'
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>Email: 
          <StyledInput
            type="email"
            placeholder='email@example.com'
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>Phone: 
          <StyledInput
            type="phone"
            placeholder='555-555-1234'
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>Are you a guide?
          <StyledInput type="checkbox" name="guide" onChange={this.handleCheckBoxChange} value={this.state.guide} />
        </StyledLabel>

        <StyledButton>Submit</StyledButton>
        </StyledDiv>
      </form>
    )
  }
}

export default withRouter(CreateAccountForm);
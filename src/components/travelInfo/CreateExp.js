import React from "react";
import styled from 'styled-components';
import axios from "axios";

const StyledInput = styled.input`
    font-size: 1.3rem;
`;

const StyledButton = styled.button`
    font-size: 1.3rem;
`;
class CreateExp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      quantity: "",
      units: "",
      trip_type: "",
      service_type: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    let newTrip = {
      location: this.state.location,
      quantity: this.state.quantity,
      units: this.state.units,
      trip_type: this.state.trip_type,
      service_type: this.state.service_type
    };

    e.preventDefault();
    console.log(newTrip);
    axios
      .post(
        "https://lambda-wanderlust-backend.herokuapp.com/api/trips",
        newTrip, 
        {headers: {Authorization: localStorage.getItem("token")}}
      )
      .then(res => {
        console.log(res.data);
        this.props.history.push("/travel-info");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            placeholder="What Location..."
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <StyledInput
            type="text"
            placeholder="What Quantity..."
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <StyledInput
            type="text"
            placeholder="What Units..."
            name="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          <StyledInput
            type="text"
            placeholder="What Trip Type..."
            name="trip_type"
            value={this.state.trip_type}
            onChange={this.handleChange}
          />
          <StyledInput
            type="text"
            placeholder="What Service Type..."
            name="service_type"
            value={this.state.service_type}
            onChange={this.handleChange}
          />
          <StyledButton>Add Trip</StyledButton>
        </form>
      </div>
    );
  }
}

export default CreateExp;

import React from "react";
import styled from 'styled-components';
import axios from "axios";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 80px;
    background: #247291;
    border-radius: 12px;
    padding: 20px 0;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px auto;
  
  width: 320px;
  border-radius: 6px;
`;

const StyledInputNumber = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px 13px;
  width: 143px;
  
  border-radius: 6px;
`;

const StyledInputUnit = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px 13px;
  width: 143px;
  
  border-radius: 6px;
`;

const StyledInputDescription = styled.textarea`
    font-size: 1.5rem;
    margin: 5px auto; 
    
    min-height: 70px;
    display: flex;
    align-items: flex-start;
    text-align: center;
    border-radius: 6px;
    width: 280px;

`;


const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 3px;
  margin: 10px;
  border-radius: 6px;
  background: #247291;
  color: white;
  width: 120px;
  margin: 10px auto;
  box-shadow: 2px 5px 2px rgba(0,0,0,1);
  &: hover {
      background: white;
      color: #247291;
      cursor: pointer;
  }
`;

const StyledLabel = styled.label`
    font-size: 1.8rem;
    padding-top: 3px;
    border-radius: 6px;
    width: 20%;
    margin: 2px auto;
    margin-top: 24px;
    color: #F7D95B;
`;

const StyledForm = styled.form`
    border-radius: 6px;
`;

class CreateExp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      quantity: "",
      units: "",
      trip_type: "",
      service_type: "",
      description: '',
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
      service_type: this.state.service_type,
      description: this.state.description,
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
        <StyledForm onSubmit={this.handleSubmit}>
        <StyledDiv>
            <StyledLabel>LOCATION</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...location..."
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <StyledLabel>TIME</StyledLabel>
          <div>
          <StyledInputNumber
            type="text"
            placeholder="...#number..."
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <StyledInputUnit
            type="text"
            placeholder="...hours...days..."
            name="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          </div>
          <StyledLabel>TRIP TYPE</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...trip type..."
            name="trip_type"
            value={this.state.trip_type}
            onChange={this.handleChange}
          />
          <StyledLabel>SERVICE</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...service type..."
            name="service_type"
            value={this.state.service_type}
            onChange={this.handleChange}
          />
          <StyledLabel>DESCRIPTION</StyledLabel>
          <StyledInputDescription
            type="text"
            placeholder="...description..."
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <StyledButton>Add Trip</StyledButton>
          </StyledDiv>
          
          
        </StyledForm>
      </div>
    );
  }
}

export default CreateExp;

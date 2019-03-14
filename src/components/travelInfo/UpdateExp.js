import React from "react";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 80px;
    background: #247291;
    border-radius: 12px;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px auto;
  width: 200px;
  border-radius: 6px;
`;

const StyledInputNumber = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px 1px;
  width: 98px;
  border-radius: 6px;
`;

const StyledInputUnit = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 7px;
  margin: 5px 1px;
  width: 98px;
  border-radius: 6px;
`;

const StyledInputDescription = styled.textarea`
    font-size: 1.3rem;
    margin: 5px;
    min-height: 70px;
    display: flex;
    align-items: flex-start;
`;


const StyledButton = styled.button`
  font-size: 1.3rem;
  margin: 10px;
  border-radius: 6px;
  background: #247291;
  color: white;
  width: 120px;
  margin: 5px auto;
  &: hover {
      background: white;
      color: #247291;
      cursor: pointer;
  }
`;

const StyledLabel = styled.label`
    font-size: 1.2rem;
    padding-top: 3px;
    border: 2px solid black;
    background: white;
    border-radius: 6px;
    width: 95px;
    margin: 2px auto;
`;


class UpdateExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      trip: {
        location: "",
        quantity: "",
        units: "",
        rip_type: "",
        service_type: "",
        description: ""
      },
      loading: true
    };
  }

  handleChange = e => {
    e.persist();
    console.log(e.target.name);
    this.setState(prevState => ({
      ...prevState,
      trip: { ...prevState.trip, [e.target.name]: e.target.value }
    }));
    console.log(this.state);
  };

  handleUpdate = e => {
    let updatedTrip = this.state.trip;
    console.log(this.state.trip);
    e.preventDefault();
    axios
      .put(
        `https://lambda-wanderlust-backend.herokuapp.com/api/trips/${
          this.state.id
        }`,
        updatedTrip,
        { headers: { Authorization: localStorage.getItem("token") } }
      )

      .then(res => {
        console.log(this.props);
        
        axios
            .get('https://lambda-wanderlust-backend.herokuapp.com/api/trips', {headers: {Authorization: localStorage.getItem("token")}})
            .then(res => {
                console.log(res)
                this.props.populateArray();
                this.props.history.push(`/travel-info/experiences/${this.state.id}`)
            })
            .catch(err => {
                console.log(err)
            })
        
        
    })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(
        `https://lambda-wanderlust-backend.herokuapp.com/api/trips/${
          this.state.id
        }`,

        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then(res => {
        console.log(res.data);
        this.props.history.push(`/travel-info`);
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
  }

  componentDidMount() {
    console.log("props: ", this.props);
    axios
      .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log("res.data", this.state.id);
        const newThing = res.data.find(
          thing => `${thing.id}` === this.state.id
        );
        console.log(newThing);
        this.setState(prevState => ({
          ...prevState,
          trip: { ...newThing },
          loading: false
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
      console.log("prop update", this.props)
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <div>
        <form>
            <StyledDiv>
            <StyledLabel>LOCATION</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...location..."
            name="location"
            value={this.state.trip.location}
            onChange={this.handleChange}
          />
          <StyledLabel>TIME</StyledLabel>
          <div>
          <StyledInputNumber
            type="text"
            placeholder="...#number..."
            name="quantity"
            value={this.state.trip.quantity}
            onChange={this.handleChange}
          />
          <StyledInputUnit
            type="text"
            placeholder="...hrs.days..."
            name="units"
            value={this.state.trip.units}
            onChange={this.handleChange}
          />
          </div>
          <StyledLabel>TRIP TYPE</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...trip type..."
            name="trip_type"
            value={this.state.trip.trip_type}
            onChange={this.handleChange}
          />
          <StyledLabel>SERVICE</StyledLabel>
          <StyledInput
            type="text"
            placeholder="...service type..."
            name="service_type"
            value={this.state.trip.service_type}
            onChange={this.handleChange}
          />
          <StyledLabel>DESCRIPTION</StyledLabel>
          <StyledInputDescription
            type="text"
            placeholder="...description..."
            name="description"
            value={this.state.trip.description}
            onChange={this.handleChange}
          />
        <StyledButton onClick={this.handleUpdate}>
          Update Trip Info
        </StyledButton>
        <StyledButton onClick={this.handleDelete}>Delete Trip</StyledButton>
          </StyledDiv>
        </form>
        
       
      </div>
    );
  }
}

export default UpdateExp;

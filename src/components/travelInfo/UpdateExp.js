import React from "react";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
`;

const StyledInput = styled.input`
  font-size: 1.3rem;
  text-align: center;
  margin: 5px;
`;

const StyledInputNumber = styled.input`
  font-size: 1.3rem;
  text-align: center;
  margin: 5px 1px;
  width: 60px;
`;

const StyledInputUnit = styled.input`
  font-size: 1.3rem;
  text-align: center;
  margin: 5px 1px;
  width: 60px;
`;

const StyledButton = styled.button`
  font-size: 1.3rem;
  margin: 10px;
  border: 2px dashed #F7D95B;
  border-radius: 6px;
`;

const StyledLabel = styled.label`
    font-size: 1.2rem;
    border: 2px 
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
        service_type: ""
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
            <StyledLabel>Location: </StyledLabel>
          <StyledInput
            type="text"
            placeholder="What Location..."
            name="location"
            value={this.state.trip.location}
            onChange={this.handleChange}
          />
          <StyledLabel>Time: </StyledLabel>
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
            placeholder="...hours.days.weeks..."
            name="units"
            value={this.state.trip.units}
            onChange={this.handleChange}
          />
          </div>
          <StyledLabel>Trip Type: </StyledLabel>
          <StyledInput
            type="text"
            placeholder="What Trip Type..."
            name="trip_type"
            value={this.state.trip.trip_type}
            onChange={this.handleChange}
          />
          <StyledLabel>Service: </StyledLabel>
          <StyledInput
            type="text"
            placeholder="What Service Type..."
            name="service_type"
            value={this.state.trip.service_type}
            onChange={this.handleChange}
          />
          </StyledDiv>
        </form>
        <StyledButton onClick={this.handleUpdate}>
          Update Trip Info
        </StyledButton>
        <StyledButton onClick={this.handleDelete}>Delete Trip</StyledButton>
      </div>
    );
  }
}

export default UpdateExp;

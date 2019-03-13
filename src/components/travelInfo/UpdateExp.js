import React from "react";
import Spinner from '../Spinner/Spinner';
import axios from "axios";

class UpdateExp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            location: "",
            quantity: "",
            units: "",
            trip_type: "",
            service_type: "",
            trip: "",
            id: ""
        };
    }

    componentWillMount() {
        this.setState({ id: this.props.match.params.id });
        
        
    }

    componentDidMount() {
        axios
            .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
            .then(res => {
                this.setState({ trip: res.data[this.state.id]})
            })
            .catch(err => {
                console.log(err)
            })
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
        newTrip
      )
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  handleUpdate = (e, id) => {
    let updatedTrip = this.state;
    console.log(this.state);
    e.preventDefault();
    axios
      .put(
        "https://lambda-wanderlust-backend.herokuapp.com/api/trips",
        updatedTrip
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = (e, id) => {
    let deletePost = this.state;
    e.preventDefault();
    axios
      .delete(
        "https://lambda-wanderlust-backend.herokuapp.com/api/trips",
        deletePost
      )
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  render() {
      console.log(this.state.trip)
      if(this.state.trip){
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="What Location..."
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            
          />
          <input
            type="text"
            placeholder="What Quantity..."
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="What Units..."
            name="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="What Trip Type..."
            name="trip_type"
            value={this.state.trip_type}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="What Service Type..."
            name="service_type"
            value={this.state.service_type}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleUpdate}>Update Trip Info</button>
        <button onClick={this.deletePost}>Delete Trip</button>
      </div>
    );} else {
        return <Spinner />;
    }
  }
}

export default UpdateExp;

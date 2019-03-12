import React from 'react';

import axios from 'axios';

class CreateExp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: '',
      quantity: '',
      units: '',
      trip_type: '',
      service_type: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    let newTrip = {
      location: this.state.location,
      quantity: this.state.quantity,
      units: this.state.units,
      trip_type: this.state.trip_type,
      service_type: this.state.service_type,
    };

    e.preventDefault();
    console.log(newTrip);
    axios
      .post(
        'https://lambda-wanderlust-backend.herokuapp.com/api/trips',
        newTrip,
      )
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button>Add Trip</button>
        </form>
      </div>
    );
  }
}

export default CreateExp;

import React from "react";
import axios from "axios";
import styles from './CreateExp.module.scss'



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
      
      <React.Fragment>
        
        <form className={styles.StyledForm} onSubmit={this.handleSubmit}>
        <h2 className={styles.CreateTrip}>Create Trip!</h2>
          <label className={styles.CreateExpLabel}>LOCATION</label>
          <input
            className={styles.CreateExpInput}
            type="text"
            placeholder="location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label className={styles.CreateExpLabel}>TRIP LENGTH</label>
          <div>
          <input
            className={styles.CreateExpInput}
            type="text"
            placeholder="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <input
            className={styles.CreateExpInput}
            type="text"
            placeholder="hours / days"
            name="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          </div>
            <label className={styles.CreateExpLabel}>TRIP TYPE</label>
          <input
            className={styles.CreateExpInput}
            type="text"
            placeholder="trip type"
            name="trip_type"
            value={this.state.trip_type}
            onChange={this.handleChange}
          />
          <label className={styles.CreateExpLabel}>SERVICE</label>
          <input
            className={styles.CreateExpInput}
            type="text"
            placeholder="service type"
            name="service_type"
            value={this.state.service_type}
            onChange={this.handleChange}
          />
          <label className={styles.CreateExpLabel}>DESCRIPTION</label>
          <textarea
            className={styles.CreateExpTextarea}
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button className={styles.CreateExpBtn}>Add Trip</button>
        </form>
        </React.Fragment>
      
    );
  }
}

export default CreateExp;

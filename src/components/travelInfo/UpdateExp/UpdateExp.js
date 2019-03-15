import React from "react";
import Spinner from "../../Spinner/Spinner";
import axios from "axios";
import styles from './UpdateExp.module.scss'



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
      
        <form className={styles.UpdateExpForm}>
          <h3 className={styles.headerThree}>UPDATE TRIP INFO</h3>
          <div className={styles.InputDiv}>
            <label className={styles.UpdateExpLabel}>LOCATION</label>
            <input
              className={styles.UpdateExpInput}
              type="text"
              placeholder="location"
              name="location"
              value={this.state.trip.location}
              onChange={this.handleChange}
              />
          </div>
          <div className={styles.InputDiv}>
            <label className={styles.UpdateExpLabel}>TIME</label>
            <input
              className={styles.UpdateExpInput}
              id={styles.Quantity}  
              type="text"
              placeholder="number"
              name="quantity"
              value={this.state.trip.quantity}
              onChange={this.handleChange}
              />
            <input
              className={styles.UpdateExpInput}
              id={styles.Unit}  
              type="text"
              placeholder="hrs / days"
              name="units"
              value={this.state.trip.units}
              onChange={this.handleChange}
              />
          </div>
          <div className={styles.InputDiv}>
            <label className={styles.UpdateExpLabel}>TRIP TYPE</label>
            <input
              className={styles.UpdateExpInput}
              type="text"
              placeholder="trip type"
              name="trip_type"
              value={this.state.trip.trip_type}
              onChange={this.handleChange}
              />
          </div>
          <div className={styles.InputDiv}>
            <label className={styles.UpdateExpLabel}>SERVICE</label>
            <input
              className={styles.UpdateExpInput}
              type="text"
              placeholder="service type"
              name="service_type"
              value={this.state.trip.service_type}
              onChange={this.handleChange}
            />
          </div>
            <label className={styles.UpdateExpLabel}>DESCRIPTION</label>
            <textarea
              className={styles.UpdateExpText}
              type="text"
              placeholder="description"
              name="description"
              value={this.state.trip.description}
              onChange={this.handleChange}
            /> 
        <button className={styles.UpdateExpBtn} onClick={this.handleUpdate}>
          Update Trip Info
        </button>
        <button className={styles.UpdateExpBtn} onClick={this.handleDelete}>Delete Trip</button>
        </form>
        
       
      
    );
  }
}

export default UpdateExp;

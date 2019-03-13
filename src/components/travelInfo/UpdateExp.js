import React from "react";
import Spinner from '../Spinner/Spinner';
import axios from "axios";

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
      },
      loading: true
    };
  }
    

    handleChange = e => {
        e.persist();
        console.log(e.target.name)
        this.setState(prevState => ({...prevState, trip: {...prevState.trip, [e.target.name]: e.target.value }}));
        console.log(this.state)
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
            this.props.history.push(`/travel-info/experiences/${this.state.id}`)
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

    componentWillMount() {
        this.setState({ id: this.props.match.params.id});
    }

    componentDidMount() {
        console.log("props: ", this.props);
        axios
            .get("https://lambda-wanderlust-backend.herokuapp.com/api/trips")
            .then(res => {
                console.log("res.data", this.state.id);
                const newThing = res.data.find(thing => `${thing.id}` === this.state.id);
                console.log(newThing);
                this.setState(prevState => ({ ...prevState, trip: {...newThing}, loading: false }));
            })
            .catch(err => {
                console.log(err);
            });

        
    }

    render() {
    
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="What Location..."
                        name="location"
                        value={this.state.trip.location}
                        onChange={this.handleChange}
            
                    />
                    <input
                        type="text"
                        placeholder="What Quantity..."
                        name="quantity"
                        value={this.state.trip.quantity}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="What Units..."
                        name="units"
                        value={this.state.trip.units}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="What Trip Type..."
                        name="trip_type"
                        value={this.state.trip.trip_type}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="What Service Type..."
                        name="service_type"
                        value={this.state.trip.service_type}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleUpdate}>Update Trip Info</button>
                <button onClick={this.deletePost}>Delete Trip</button>
            </div>
        );
    }
}

export default UpdateExp;

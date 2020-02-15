import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
// import store from '../../store'

export class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      img: "",
      mortgage: "",
      rent: ""
    };
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

    //   handleChange(name, address, city, state, zipcode) {
    //     this.setState({
    //       name: name,
    //       address: address,
    //       city: city,
    //       state: state,
    //       zip: zip
    //     });
    //     console.log(this.state)
    // }

  render() {
    return (
      <div>
        Wizard
        <h5>Property Name:</h5>
        <input
          value={this.state.name}
          onChange={e => this.handleChange(e, "name")}
        />
        <h5>Adress:</h5>
        <input
          value={this.state.address}
          onChange={e => this.handleChange(e, "address")}
        />
        <h5>City:</h5>
        <input
          value={this.state.city}
          onChange={e => this.handleChange(e, "city")}
        />
        <h5>State:</h5>
        <input
          value={this.state.state}
          onChange={e => this.handleChange(e, "state")}
        />
        <h5>Zipcode:</h5>
        <input
          value={this.state.zip}
          onChange={e => this.handleChange(e, "zip")}
        />
        <h5>Image:</h5>
        <input
          value={this.state.image}
          onChange={e => this.handleChange(e, "image")}
        />
        <h5>Mortgage:</h5>
        <input
          value={this.state.mortgage}
          onChange={e => this.handleChange(e, "mortgage")}
        />
        <h5>Rent:</h5>
        <input
          value={this.state.rent}
          onChange={e => this.handleChange(e, "rent")}
        />
        <p>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default Wizard;
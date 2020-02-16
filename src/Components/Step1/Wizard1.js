import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import store from '../../store'

export default class Wizard1 extends Component {
  constructor() {
    super();
    // const reduxState = store.getState();

    this.state = {
      // name: reduxState.name,
      // address: reduxState.address,
      // city: reduxState.city,
      // state: reduxState.state,
      // zip: reduxState.zip,
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
    //       zipcode: zipcode
    //     });
    //     console.log(this.state)
    // }

  render() {
    return (
      <div>
        Wizard - Step 1
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
          value={this.state.zipcode}
          onChange={e => this.handleChange(e, "zipcode")}
        />
        
        <p>
          <Link to="/wizard/step2">
            <button className="dash_subheader_button">Next Step</button>
          </Link>
        </p>
        <p>
          <Link to="/">
            <button className="dash_subheader_button_cancel">Cancel</button>
          </Link>
        </p>
      </div>
    );
  }
}

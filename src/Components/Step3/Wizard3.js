import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import store from '../../store'

export default class Wizard3 extends Component {
  constructor() {
    super();
    // const reduxState = store.getState();

      this.state = {
        mortgage: "",
        rent: ""
        // mortgage: reduxState.mortgage,
        // rent: reduxState.rent
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
        Wizard - Step 3
       
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
            <button>Complete</button>
          </Link>
        </p>
        <p>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </p>
      </div>
    );
  }
}

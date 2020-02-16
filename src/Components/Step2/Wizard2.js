import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import store from '../../store'

export default class Wizard2 extends Component {
  constructor() {
    super();
    // const reduxState = store.getState();

    this.state = {
      img: ""
      // img: reduxState.img
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
        Wizard - Step 2
        
        <h5>Image:</h5>
        <input
          value={this.state.image}
          onChange={e => this.handleChange(e, "image")}
        />
        
        <p>
          <Link to="/wizard/step3">
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

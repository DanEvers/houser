import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
// import store from "../../store";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // const reduxState = store.getState();

    this.state = {
      houses: []
    };
  }

  // End Endpoints
  getAllHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({ houses: res.data });
    });
    // console.log(houses)
  }

  deleteHouse = id => {
    axios.delete(`/api/house/${id}`);
  };

  // Component Initial Mounting
  componentDidMount() {
    this.getAllHouses();
  }

  render() {
    const houseList = this.state.houses.map((currentHouse, id) => {
      return (
        <House
          key={id}
          img={currentHouse.img}
          name={currentHouse.name}
          address={currentHouse.address}
          city={currentHouse.city}
          state={currentHouse.state}
          zip={currentHouse.zip}
        />
      );
    });
    return (
      <div className="dash">
        <div className="dash_subheader">
          <div className="dash_heading">
            <h2>Dashboard</h2>
          </div>
        </div>
        <Link to="/wizard/step1">
          <button className="dash_subheader_button">Add New Property</button>
        </Link>
        <div className="dash_prop_container">
          <h3 className="dash_prop_heading">Home Listings</h3>
          <div className="House">
            <div className="house_detail_box">{houseList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

import React from "react";
import "../../App.css";

function House(props) {
  const { img, name, address, city, state, zip } = props;

  return (
    <div className="home_listings">
      <h2>Home Listings</h2>
      {img}<br></br>
      {name}<br></br>
      {address}<br></br>
      {city}<br></br>
      {state}<br></br>
      {zip}<br></br>
    </div>
  );
}

export default House;

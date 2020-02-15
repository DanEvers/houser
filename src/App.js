import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Wizard from "./Components/Wizard/Wizard";
import House from "./Components/House/House";
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        {/* <Dashboard /> */}
        {/* <Wizard /> */}
        {routes}
        {/* <House /> */}
      </HashRouter>
    </div>
  );
}

export default App;

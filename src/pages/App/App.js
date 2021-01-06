import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ShipList from "../ShipList/ShipList";
import ShipDetails from "../ShipDetails/ShipDetails";

class App extends Component {
  state = {
    navItems: [{ url: "/ships", name: "Star Ships" }],
  };
  render() {
    return (
      <>
        <NavBar navItems={this.state.navItems} />
        <Route exact path="/ships" render={() => <ShipList />} />
        <Route
          exact
          path="/details"
          render={({ location }) => <ShipDetails location={location} />}
        />
      </>
    );
  }
}
export default App;

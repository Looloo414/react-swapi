import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ShipList from '../ShipList/ShipList'

class App extends Component {
  state = {
    navItems: [{ url: "/ships", name: "Star Ships" }],
  };
  render() {
    return (
      <>
        <NavBar navItems={this.state.navItems} />
        <Route
          exact
          path="/ships"
          render={() => <ShipList />
          }/>
      </>
    );
  }
}
export default App;

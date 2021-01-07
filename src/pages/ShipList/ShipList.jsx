import React, { Component } from "react";
import { getShipList } from "../../services/api-calls";
import  {Link}  from "react-router-dom";

class ShipList extends Component {
  state = {
    results: [],
  }
  async componentDidMount() {
    const shipData = await getShipList();
    console.log(shipData)
    this.setState({ results: shipData.results });
  }
  render() {
    return (
      <>
        <h1>Ship List </h1>
        <div className="ship-container">
          {this.state.results.map((shipName, idx) => (
            <div key={idx}>
              <Link
                to={{
                  pathname: "/details",
                  state: {shipName} ,
                }}
              >
                  {shipName.name}
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ShipList;

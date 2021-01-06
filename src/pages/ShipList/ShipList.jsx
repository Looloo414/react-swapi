import React, { Component } from "react";
import { getShipList } from "../../services/api-calls";
import { Link } from "react-router-dom";

class ShipList extends Component {
  state = {
    results: [],
  }
  async componentDidMount() {
    const shipData = await getShipList();
    this.setState({ results: shipData.results });
  }
  render() {
    return (
      <>
        <h1>Ship List </h1>
        <div className="ship-container">
          {this.state.results.map((shipName) => (
            <div key={shipName.index}>
              <Link
                to={{
                  pathname: "/ship",
                  state: { shipName },
                }}
              >
                <div id="classDiv">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={`/images/${shipName.name}.svg`}
                    alt=""
                  />
                  {shipName.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ShipList;

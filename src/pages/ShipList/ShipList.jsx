import React, { Component } from "react";
import { getShipList } from "../../services/api-calls";

class ShipList extends Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const shipData = await getShipList();
    this.setState({ results: shipData.results });
  }
  render() {
    return (
      <>
        <div>
            <h2>Ship Lists Here</h2>
        </div>
      </>
    );
  }
}

export default ShipList;

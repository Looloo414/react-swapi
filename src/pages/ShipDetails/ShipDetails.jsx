import React, { Component } from "react";
import { getDetails } from "../../services/api-calls";
import { Link } from "react-router-dom";

class ShipDetails extends Component {
  state = {
    url: this.props.location.state.shipName.url,
    details: {},
  };
  async componentDidMount() {
    const details = await getDetails(this.state.url);
    this.setState({ details });
  }
  render() {
    const { details } = this.state;
    console.log(details)
    return (
      <div>
          <h1>hi</h1>
        {details.name ? 
          <>
            <h4>
              {" "}
              {details.name} <br /> {details.model}{" "}
            </h4>
            <Link to={{ pathname: "/" }}>RETURN TO HOME BASE</Link>
          </>
         : 
          <>
            <p>Loading Ship Details...</p>
          </>
        }
      </div>
    );
  }
}

export default ShipDetails;

import React, { Component } from 'react';
import { getDetails } from "../../services/api-calls";

class ShipDetails extends Component {
   state = {
       url: this.props.location.state.shipName.url,
       details: {}
   }
   async componentDidMount() {
       const shipDetails = await getDetails(this.state.url)
       this.setState({shipDetails})
   }
   render() { 
       return ( 
           <></>
           );
        }
    }

 
export default ShipDetails;
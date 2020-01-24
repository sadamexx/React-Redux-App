import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { fetchVehicle } from "../actions/vehicleAction";
import VehicleList from "./VehicleList";


const Vehicles = props => {
  console.log(props)
  return( 
    <div>
      <button onClick={props.fetchVehicle}>Get Vehicles!</button>
      {/* {!props.vehicle && !props.isLoading && <h2> Show me vehicles</h2>} */}

      {props.isLoading &&
      (<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
     />)}

      {props.vehicle && !props.isLoading && <VehicleList />}
         
     
    </div>
  )
};


const mapStateToProps = state =>{
  return{ 
    isLoading: state.isLoading,
    vehicle: state.vehicle,
    error: state.error
  }
}
export default connect (mapStateToProps,{fetchVehicle})(Vehicles);
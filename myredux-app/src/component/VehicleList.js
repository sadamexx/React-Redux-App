import React from "react";
import { connect } from "react-redux";
import VehicleCard from "./VehicleCard";
import {Container, Row} from "reactstrap";

const VehicleList = (props) => {
  console.log(props)
 return(
   <Container>
     <Row>
      {props.vehicle.map(item => (
        <VehicleCard 
        key={item.id} 
        name={item.name} 
        vehicle_class={item.vehicle_class} 
        length={item.length} 
        description={item.description} />        
        ))}
      </Row>
   </Container>
 );
}

const mapStateToProps = state =>{
  return{ 
    isLoading: state.isLoading,
    vehicle: state.vehicle,
    error: state.error
  }
}


export default connect (mapStateToProps, {}) (VehicleList);
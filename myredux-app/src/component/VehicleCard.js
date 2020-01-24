import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const VehicleCard = props => {
  return(
    <Col xs="12" s="6" md="3">
      <Card>        
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.vehicle_class}</CardSubtitle>
          <CardText>Length: {props.length}</CardText>
          <CardText>Description: {props.description}</CardText>          
        </CardBody>
      </Card>

    </Col>
  )
};

export default VehicleCard;
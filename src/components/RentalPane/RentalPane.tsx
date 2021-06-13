import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Drone } from "../Drone/Drone";

export const RentalPane = () => {
  return (
    <div className="yourRentals fixed-bottom ">
      <Container>
        <Row>
          <Col>
            <h6>Your Rental</h6>
          </Col>
          <Col className="d-none d-md-block">&nbsp;</Col>
        </Row>
      </Container>
    </div>
  );
};

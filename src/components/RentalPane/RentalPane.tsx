import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const RentalPane: FC = () => {
  return (
    <div className="yourRentals fixed-bottom ">
      <Container>
        <Row>
          <Col>
            <h6>Your Rental</h6>
            <small>Rent a drone to begin</small>
            <p></p>
          </Col>
          <Col className="d-none d-md-block">&nbsp;</Col>
        </Row>
      </Container>
    </div>
  );
};

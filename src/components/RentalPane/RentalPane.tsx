import React, { FC, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RentalContext } from "../../containers/RentalContext/RentalContext";

export const RentalPane: FC = () => {
  const { rental, returnDrone } = useContext(RentalContext);
  const timeRemaining = rental
    ? parseInt(rental[0].maxFlightTime.replace("min", ""))
    : null;
  return (
    <div className="yourRentals fixed-bottom ">
      <Container>
        <Row>
          <Col>
            <h6>Your Rental</h6>
            {rental && (
              <p>
                {rental[0].model}, {timeRemaining}
              </p>
            )}
            <small>Rent a drone to begin</small>
          </Col>
          <Col className="d-none d-md-block">&nbsp;</Col>
        </Row>
      </Container>
    </div>
  );
};

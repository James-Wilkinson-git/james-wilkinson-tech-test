import React, { FC, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RentalContext } from "../../containers/RentalContext/RentalContext";

export const RentalPane: FC = () => {
  const { isLoading, rental, returnDrone } = useContext(RentalContext);
  const [maxFlightTime, setMaxFlightTime] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      const parseTime = parseInt(
        rental[0].drone[0].maxFlightTime.replace("min", "")
      );
      setTimeRemaining(parseTime);
    }
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining <= 0) {
        //Crash and return
        clearInterval(interval);
        returnDrone(rental[0].drone[0]);
      } else {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  return (
    <div className="yourRentals fixed-bottom ">
      <Container>
        <Row>
          <Col>
            <h6>Your Rental</h6>
            {!isLoading && timeRemaining > 0 && (
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={`/images/drones/${rental[0].drone[0].model}.jpg`}
                      alt={rental[0].drone[0].model}
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>{rental[0].drone[0].model}</h5>
                    <h6>{rental[0].drone[0].manufacturer}</h6>
                  </Col>
                  <Col>
                    <p>
                      <small>Time Remaining: {timeRemaining}</small>
                    </p>

                    <Button type="primary">Return</Button>
                  </Col>
                </Row>
              </div>
            )}
            {isLoading && <small>Rent a drone to begin</small>}
          </Col>
          <Col className="d-none d-md-block">&nbsp;</Col>
        </Row>
      </Container>
    </div>
  );
};

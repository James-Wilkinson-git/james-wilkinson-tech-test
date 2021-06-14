import { FC, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RentalContext } from "../../containers/RentalContext/RentalContext";

export const RentalPane: FC = () => {
  const { isLoading, rental, returnDrone } = useContext(RentalContext);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  //We need to wait for the data of rental to be populated once it it populate
  //isLoading is set to false and we have access to the data to manipulate it
  //and add to our local state.
  useEffect(() => {
    if (!isLoading) {
      const parseTime = parseInt(
        rental[0].drone[0].maxFlightTime.replace("min", "")
      );
      setTimeRemaining(parseTime);
    }
  }, [isLoading, rental]);

  //Use another useEffect to dynamically update state on component load
  //this sets an interval that will be cleared when the component is unmounted
  //take our current time and subtract a minute from it every second
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
    //This timeout is in 1 sec interval for demo purposes
    //but we would set it to 60000ms instead so that the minutes
    //matched the minutes the data came in it would also be more
    //performant to poll for changes less frequently
    return () => clearInterval(interval);
  });

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

                    <Button
                      type="primary"
                      variant="info"
                      onClick={() => returnDrone(rental[0].drone[0])}
                    >
                      Return
                    </Button>
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

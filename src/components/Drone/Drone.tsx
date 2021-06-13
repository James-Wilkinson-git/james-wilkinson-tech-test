import React, { FC } from "react";
import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import { IDrone } from "../Station/Station";
export const Drone: FC<IDrone> = ({
  manufacturer,
  model,
  maxFlightTime,
  charge,
}) => {
  // Based on the supplied data we need to massage it a bit, this is where I would normally
  // work with the backend team to see if we could get the data in a cleaner format as these
  // types of data manipulations are expensive to performance in JavaScript
  const imgSlug = encodeURI(model);
  const chargePercent = parseInt(charge.replace("%", ""));
  const isCharging = chargePercent < 100;

  return (
    <div className="wdBorderBox">
      <Row>
        <Col>
          <img
            src={`/images/drones/${imgSlug}.jpg`}
            alt={model}
            className="img-fluid"
          />
        </Col>
        <Col>
          <h5>{model}</h5>
          <h6>{manufacturer}</h6>
        </Col>
        <Col>
          <p>
            <small>Max Flight Time: {maxFlightTime}</small>
          </p>
          {chargePercent > 10 && <Button type="primary">Rent</Button>}
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Battery</small>
          <ProgressBar
            striped={isCharging}
            animated={isCharging}
            variant="success"
            now={chargePercent}
          />
        </Col>
      </Row>
    </div>
  );
};

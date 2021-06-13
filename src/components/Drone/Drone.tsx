import React from "react";
import { Button, Col, ProgressBar, Row } from "react-bootstrap";

export const Drone = () => {
  return (
    <div className="wdBorderBox">
      <Row>
        <Col>
          <img
            src={"/images/drones/Nano%20QX.jpg"}
            alt="Drone"
            className="img-fluid"
          />
        </Col>
        <Col>
          <h5>Drone Name</h5>
          <h6>Drone Manufacturer</h6>
        </Col>
        <Col>
          <p>
            <small>Max Flight Time: 23 min</small>
          </p>
          <Button type="primary">Rent</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Battery</small>
          <ProgressBar variant="success" now={40} />
        </Col>
      </Row>
    </div>
  );
};

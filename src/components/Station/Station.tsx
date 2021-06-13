import React, { FC } from "react";
import { Row } from "react-bootstrap";
import { Drone } from "../Drone/Drone";

export const Station: FC<{ name: string }> = ({ name }) => {
  return (
    <Row className="mb-3">
      <h2>{name}</h2>
      <Drone />
      <Drone />
      <Drone />
      <Drone />
      <Drone />
    </Row>
  );
};

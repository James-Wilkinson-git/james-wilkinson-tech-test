//React Imports
import React, { FC } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
//Self Imports
import { DroneInfoPane } from "../../components/DroneInfoPane/DroneInfoPane";
import { RentalPane } from "../../components/RentalPane/RentalPane";
import { Station } from "../../components/Station/Station";
//Style Imports
import "./App.scss";

//Entry point to the application rendered by index.tsx
export const App: FC = () => {
  // States
  // Data Parsing Functions
  // Stations
  // Drones
  // Station and Drone Mapping
  // On Drone Click show in info pane
  // On Drone Rental
  // On Drone Return
  return (
    <div className="App" data-testid="AppContainer">
      <Container>
        <Row className="mt-3">
          <h1>Drone Rentals</h1>
        </Row>
        <Row>
          <Col>
            <Station name="Soho Station" />
            <Station name="Vauxhall Station" />
            <Station name="Camden Station" />
          </Col>
          <DroneInfoPane />
        </Row>
      </Container>
      <RentalPane />
    </div>
  );
};

//React Imports
import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//Self Imports
import { DroneInfoPane } from "../../components/DroneInfoPane/DroneInfoPane";
import { RentalPane } from "../../components/RentalPane/RentalPane";
import { Station } from "../../components/Station/Station";
import stationsFile from "../../assets/stations.json";
//Style Imports
import "./App.scss";

export interface IStation {
  name: string;
  drones: string[];
}

//Entry point to the application rendered by index.tsx
export const App: FC = () => {
  // States

  const [stationsList, setStationsList] = useState<IStation[]>();
  // Data Parsing Functions

  // Stations

  /* This would normally be an api call with a catch for when the 
  API failed to show the user an error and have a state to show a 
  loading indicator for the user while the data is being fetched 
  */

  useEffect(() => {
    //To avoid performance pitfalls of the useEffect dependency array we wrap our effect in a function and call it

    const fetchStationsList = () => {
      setStationsList(stationsFile.stations);
    };

    // You would also normally implement a try catch to signal any errors in the non API processing part of fetching dynamic data.

    fetchStationsList();
  });

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
            {stationsList &&
              stationsList.map((station, i) => {
                return (
                  <Station
                    name={station.name}
                    drones={station.drones}
                    key={i}
                  />
                );
              })}
          </Col>
          <DroneInfoPane />
        </Row>
      </Container>
      <RentalPane />
    </div>
  );
};

//React Imports
import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//Self Imports
import { RentalPane } from "../../components/RentalPane/RentalPane";
import { Station } from "../../components/Station/Station";
import { RentalContext } from "../RentalContext/RentalContext";
import stationsFile from "../../assets/stations.json";
//Style Imports
import "./App.scss";

//Entry point to the application rendered by index.tsx
export const App: FC = () => {
  // States
  const [rental, setRental] = useState<IRental[]>([
    {
      model: "",
      maxFlightTime: "0",
    },
  ]);
  const [stationsList, setStationsList] = useState<IStation[]>();

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

  // Drone Rental
  const rentDrone = (drone: IDrone) => {
    console.log(drone);
    setRental([{ model: drone.model, maxFlightTime: drone.maxFlightTime }]);
    console.log(rental);
  };

  return (
    <RentalContext.Provider value={{ rental, rentDrone }}>
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
            <Col className="d-none d-md-block"></Col>
          </Row>
        </Container>
        <RentalPane />
      </div>
    </RentalContext.Provider>
  );
};

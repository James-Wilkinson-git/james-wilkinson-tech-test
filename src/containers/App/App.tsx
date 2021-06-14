//React Imports
import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import _ from "lodash";
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
      drone: [],
      isReturning: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  /* This would normally be an api call with a catch for when the 
  API failed to show the user an error and have a state to show a 
  loading indicator for the user while the data is being fetched 
  */
  const [stationsList, setStationsList] = useState<IStation[]>(
    stationsFile.stations
  );
  // Drone Rental
  const rentDrone = (drone: IDrone) => {
    const updateStations = stationsList?.map((station) => {
      if (station.drones.includes(drone.model)) {
        _.pull(station.drones, drone.model);
        return station;
      } else {
        return station;
      }
    });
    setStationsList(updateStations);
    console.log(updateStations);
    setRental([
      {
        drone: [drone],
        isReturning: false,
      },
    ]);
    setIsLoading(false);
  };

  const returnDrone = (drone: IDrone) => {
    setIsLoading(true);
    // this is putting the rental back in all the empty slots oops
    const returnedStationList = stationsList.map((station) => {
      if (station.drones.length < 9) {
        station.drones.push(drone.model);
      } else {
        console.error("all stations are full");
      }
      return station;
    });
    setStationsList(returnedStationList);
    console.log(returnedStationList);
  };

  return (
    <RentalContext.Provider
      value={{ isLoading, rental, rentDrone, returnDrone }}
    >
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
        {!isLoading && <RentalPane />}
      </div>
    </RentalContext.Provider>
  );
};

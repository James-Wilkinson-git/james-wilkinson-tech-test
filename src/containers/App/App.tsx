//React Imports
import React, { FC, useState } from "react";
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
  //Pass this function to the context provider so all other components can call this function
  const rentDrone = (drone: IDrone) => {
    //Grab the stations and find the one that has this drone in it
    const updateStations = stationsList?.map((station) => {
      if (station.drones.includes(drone.model)) {
        //take that drone out out of the array
        _.pull(station.drones, drone.model);
        //and return the station back
        return station;
      } else {
        //if its not in that station return the station unchanged
        return station;
      }
    });
    //Update our state with our new set of stations
    setStationsList(updateStations);
    //Pass the drone object around to use throughout the context
    setRental([
      {
        drone: [drone],
      },
    ]);
    //Tell all other context listeners that we are done setting the rental
    setIsLoading(false);
  };

  // Pass a function to the context provider for returning a drone
  const returnDrone = (drone: IDrone) => {
    //Set loading back to true so the tray hides and anything relying on data doesn't evaluate.
    setIsLoading(true);
    //A variable for if we found a spot to return the done yet
    let returned = false;
    //Loop through all the stations and see if there is an empty space
    const returnedStationList = stationsList.map((station) => {
      //if we find a space push the drone in and set our variable so we don't add this to all stations with a spot
      if (station.drones.length <= 9 && !returned) {
        station.drones.push(drone.model);
        returned = true;
      } else {
        console.error("all stations are full");
      }
      return station;
    });
    //Update our state to show in the UI the drone has returned
    setStationsList(returnedStationList);
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
                stationsList.map((station) => {
                  return (
                    <Station
                      name={station.name}
                      // we need to copy the object here because React only detects state changes
                      // at the top level so since we are modify this state we make a copy
                      // and react now compares deep state
                      drones={[...station.drones]}
                      //React also requires a unique key not just an index number to find which state object to update
                      key={station.name}
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

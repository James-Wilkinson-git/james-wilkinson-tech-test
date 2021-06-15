import React from "react";
import { render, screen } from "@testing-library/react";
import { Drone } from "../Drone/Drone";
import { RentalContext } from "../../containers/RentalContext/RentalContext";
import { RentalPane } from "./RentalPane";

test("renders drone in rental tray", () => {
  //Arrange
  const isLoading = false;
  const rental: IRental[] = [
    {
      drone: [
        {
          manufacturer: "Parrot",
          model: "Anafi",
          maxFlightTime: "25min",
          charge: "0%",
        },
      ],
    },
  ];
  const rentDrone = () => {};
  const returnDrone = () => {};

  render(
    <RentalContext.Provider
      value={{ isLoading, rental, rentDrone, returnDrone }}
    >
      <RentalPane />
    </RentalContext.Provider>
  );
  //Act
  const rentedDrone = screen.getByTestId("rentedDrone");
  expect(rentedDrone).toBeInTheDocument();
});

//I would somehow listen for the timer to finish and test that the item was removed
test.skip("removes drone when timer is up", () => {
  return;
});

//I would test the click of the return button to see it removes the item from the tray
test.skip("removes drone when user clicks return", () => {
  return;
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Drone } from "../Drone/Drone";

test("renders a drone with no rent button if charge is less than 10%", () => {
  //Arrange
  render(
    <Drone
      {...{
        manufacturer: "Parrot",
        model: "Anafi",
        maxFlightTime: "25min",
        charge: "0%",
      }}
    />
  );
  //Act
  const droneRentBtn = screen.queryByTestId("rentBtn");
  //Assert
  expect(droneRentBtn).toBeNull();
});

test("renders a drone with rent button if charge is less more than 10%", () => {
  //Arrange
  render(
    <Drone
      {...{
        manufacturer: "Parrot",
        model: "Anafi",
        maxFlightTime: "25min",
        charge: "100%",
      }}
    />
  );
  //Act
  const droneRentBtn = screen.queryByTestId("rentBtn");
  //Assert
  expect(droneRentBtn).toBeInTheDocument();
});

//I would test the click of the rent button to see it removes the item from the station
test.skip("removes drone when user clicks rent", () => {
  return;
});

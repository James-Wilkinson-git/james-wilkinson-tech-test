import React from "react";
import { render, screen } from "@testing-library/react";
import { Drone } from "../Drone/Drone";

test("renders a drone", () => {
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
  const droneEntity = screen.getByTestId("drone");
  //Assert
  expect(droneEntity).toBeInTheDocument();
});

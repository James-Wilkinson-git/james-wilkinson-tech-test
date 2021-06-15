import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { Station } from "../../components/Station/Station";

test("renders app container", () => {
  //Arrange
  render(<App />);
  //Act
  const appContainer = screen.getByTestId("AppContainer");
  //Assert
  expect(appContainer).toBeInTheDocument();
});

test("renders a station", () => {
  //Arrange
  render(<Station name="Test Station" drones={["Phantom4"]} />);
  //Act
  const station = screen.getByTestId("station");
  //Assert
  expect(station).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders app container", () => {
  //Arrange
  render(<App />);
  //Act
  const appContainer = screen.getByTestId("AppContainer");
  //Assert
  expect(appContainer).toBeInTheDocument();
});

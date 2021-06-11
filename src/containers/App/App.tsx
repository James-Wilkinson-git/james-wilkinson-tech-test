//React Imports
import React, { FC } from "react";
//Self Imports
//Style Imports
import "./App.scss";

//Entry point to the application rendered by index.tsx
export const App: FC = () => {
  return (
    <div className="App" data-testid="AppContainer">
      App
    </div>
  );
};

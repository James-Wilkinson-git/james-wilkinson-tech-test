import React, { createContext } from "react";

export const RentalContext = createContext<RentalContextType>({
  rentDrone: (drone: IDrone) => {},
  returnDrone: (drone: IDrone) => {},
});

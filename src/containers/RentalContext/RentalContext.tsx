import React, { createContext } from "react";

export const RentalContext = createContext<RentalContextType>({
  rental: [
    {
      model: "",
      maxFlightTime: "",
    },
  ],
  rentDrone: (drone: IDrone) => {},
});

import React, { createContext } from "react";

export const RentalContext = createContext<RentalContextType>({
  isLoading: true,
  rental: [
    {
      drone: [],
      isReturning: false,
    },
  ],
  rentDrone: (drone: IDrone) => {},
  returnDrone: (drone: IDrone) => {},
});

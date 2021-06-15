import { createContext } from "react";

export const RentalContext = createContext<RentalContextType>({
  isLoading: true,
  rental: [
    {
      drone: [],
    },
  ],
  rentDrone: (drone: IDrone) => {},
  returnDrone: (drone: IDrone) => {},
});

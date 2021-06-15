interface IDrone {
  manufacturer: string;
  model: string;
  maxFlightTime: string;
  charge: string;
}
interface IRental {
  drone: IDrone[];
}
interface IStation {
  name: string;
  drones: string[];
}
type RentalContextType = {
  isLoading: boolean;
  rental: IRental[];
  rentDrone: (drone: IDrone) => void;
  returnDrone: (drone: IDrone) => void;
};

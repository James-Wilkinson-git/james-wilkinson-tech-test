interface IDrone {
  manufacturer: string;
  model: string;
  maxFlightTime: string;
  charge: string;
}
interface IRental {
  model: string;
  maxFlightTime: string;
}
interface IStation {
  name: string;
  drones: string[];
}
type RentalContextType = {
  rental?: IRental[];
  rentDrone: (drone: IDrone) => void;
  returnDrone: (drone: IDrone) => void;
};

import { Navigation } from 'react-native-navigation';
import FinalReserve from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {dismissModal, pop, screens} from "../../ball-library";
import {sportReservationStore} from "../../sportReservation2/store/SportReservationStore";


export const registerFinalReserveScreen = () => {
  Navigation.registerComponent(screens.finalReserve.id, () =>
    gestureHandlerRootHOC(FinalReserve)
  );
};


export const popFinalReserveScreen = async () => {
  await sportReservationStore.reset();
  await pop(screens.finalReserve.id)
  // await dismissModal(screens.finalReserve.id)
};

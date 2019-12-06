import { Navigation } from 'react-native-navigation';
import ReservationList from '../screen';
import QrCode from '../screen/QrCode';
import CancelReserve from '../screen/CancelReserve';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {
  screens,
  dismissModal,
  showOverlay,
  dismissOverlay
} from '../../ball-library';

export function registerReservationList() {
  Navigation.registerComponent(screens.reservationList.id, () =>
    gestureHandlerRootHOC(ReservationList)
  );
  Navigation.registerComponent(screens.qrCode.id, () =>
    gestureHandlerRootHOC(QrCode)
  );
  Navigation.registerComponent(screens.cancelReserve.id, () =>
    gestureHandlerRootHOC(CancelReserve)
  );
}

export const dismissReservationListScreen = async () => {
  await dismissModal(screens.reservationList.id);
};

export const showQrCode = async () => {
  await showOverlay({
    ...screens.qrCode
  });
};
export const dismissQrCode = async () => {
  await dismissOverlay(screens.qrCode.id);
};
export const showCancelReserve = async () => {
  await showOverlay({
    ...screens.cancelReserve
  });
};

export const dismissCancelReserve = async () => {
  await dismissOverlay(screens.cancelReserve.id);
};

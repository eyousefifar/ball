import { Navigation } from 'react-native-navigation';
import ReservationList from '../screen';
import QrcodeOverlay from '../components/QrcodeOverlay';
import CancelOverlay from '../components/CancelOverlay';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {screens, dismissModal, showOverlay, dismissOverlay} from '../../ball-library';



export function registerReservationList() {
  Navigation.registerComponent(screens.reservationList.id, () =>
    gestureHandlerRootHOC(ReservationList)
  );
  Navigation.registerComponent(screens.qrCode.id, () =>
    gestureHandlerRootHOC(QrcodeOverlay)
  );
  Navigation.registerComponent(screens.cancelReserve.id, () =>
    gestureHandlerRootHOC(CancelOverlay)
  );
}

export const dismissReservationListScreen = async () => {
  await dismissModal(screens.reservationList.id);
};

export const showQrCode = async (code:string, qrCodeId:string) => {
  await showOverlay({
    ...screens.qrCode,
    passProps:{
      code:code,
      qrCodeId:qrCodeId
    }
  });
};
export const dismissQrCode = async () => {
  await dismissOverlay(screens.qrCode.id);
};

export const showCancelReserve = async (reserveId:string) => {
  await showOverlay({
    ...screens.cancelReserve,
    passProps:{
      reserveItemId:reserveId
    }
  });
};
export const dismissCancelReserve = async () => {
  await dismissOverlay(screens.cancelReserve.id);
};

import { Navigation } from 'react-native-navigation';
import Profile from '../screen';
import {screens, dismissModal, showModal, push} from '../../ball-library';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export const registerProfileScreen = () => {
  Navigation.registerComponent(screens.profile.id, () =>
    gestureHandlerRootHOC(Profile)
  );
};


export const showSportReserve = async (sportId: string) => {
  await push({
    startId: screens.profile.id ,
    toScreenId:screens.sport.id,
    auth: false,
    passProps: {
      sportId: sportId,
      initialScreenIndex: 0
    }
  });
};


export const dismissProfileScreen = async () => {
  await dismissModal(screens.profile.id);
};

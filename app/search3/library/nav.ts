import { Navigation } from 'react-native-navigation';
import Search from '../screen';
import {screens, pop, showModal, push} from '../../ball-library';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export function registerSearchScreen() {
  Navigation.registerComponent(screens.search.id, () =>
    gestureHandlerRootHOC(Search)
  );
}

export const showSportReserve2 = async () => {
  await push({
    startId: screens.search.id,
    toScreenId: screens.sportComplex.id,
    auth:false,
    passProps: {
      sportId: 1,
      initialScreenIndex: 0
    }
  });
};

export const showSportReserve = async (sportId:string) => {
  await push({
    startId: screens.search.id,
    toScreenId: screens.sport.id,
    auth:false,
    passProps: {
      sportId: sportId,
      initialScreenIndex: 1
    }
  });
};

export const popSearchScreen = async () => {
  await pop(screens.search.id)
};


export const dismissSearchScreen = async () => {
  await pop(screens.search.id)
};

export const toggleDrawer = async () => {
  await Navigation.mergeOptions(screens.home.id, {
    sideMenu: {
      right: {
        visible: true
      }
    }
  });
};

import { Navigation } from 'react-native-navigation';
import SearchGroup from '../screen';
import {pop, push, screens, showModal} from '../../ball-library';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export function registerSearchGroupScreen() {
  Navigation.registerComponent(screens.searchGroup.id, () =>
    gestureHandlerRootHOC(SearchGroup)
  );
}

export const toggleDrawer = async () => {
  await Navigation.mergeOptions(screens.home.id, {
    sideMenu: {
      right: {
        visible: true
      }
    }
  });
};

export const popSearchGroupPage = async () => {
  await pop(screens.searchGroup.id)
};


export const showSportReserve = async (sportId: string) => {
  await push({
    startId: screens.searchGroup.id ,
    toScreenId:screens.sport.id,
    auth: false,
    passProps: {
      sportId: sportId,
      initialScreenIndex: 0
    }
  });
};

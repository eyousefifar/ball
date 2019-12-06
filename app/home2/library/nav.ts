import {Navigation} from 'react-native-navigation';
import Home from '../screen';
import {push, screens, showModal} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export const registerHomeScreens = () => {
  Navigation.registerComponent(screens.home.id, () =>
    gestureHandlerRootHOC(Home),
  );
};

export const toggleDrawer = async () => {
  await Navigation.mergeOptions(screens.home.id, {
    sideMenu: {
      right: {
        visible: true,
      },
    },
  });
};

export const searchPress = async () => {
  await push({
    startId: screens.home.id,
    toScreenId: screens.search.id,
    auth: screens.search.auth,
    passProps: {
      isMap: false,
    },
  });
};

export const searchGroup = async (title: string, query: string) => {
  await push({
    startId: screens.home.id,
    toScreenId: screens.searchGroup.id,
    auth: screens.searchGroup.auth,
    passProps: {
      title: title,
      query: query,
    },
  });
};

export const mapPress = async () => {
  await push({
    startId: screens.home.id,
    toScreenId: screens.search.id,
    auth: screens.search.auth,
    passProps: {
      isMap: true,
    },
  });
};

export const showSportReserve = async (sportId: string) => {
  await push({
    startId: screens.home.id ,
    toScreenId:screens.sport.id,
    auth: false,
    passProps: {
      sportId: sportId,
      initialScreenIndex: 0
    }
  });
};

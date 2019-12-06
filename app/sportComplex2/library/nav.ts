import { Navigation } from 'react-native-navigation';
import SportComplex from '../screen/SportComplex';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens, push, pop} from '../../ball-library';

export const registerSportComplexScreen = () => {
  Navigation.registerComponent(screens.sportComplex.id, () =>
    gestureHandlerRootHOC(SportComplex)
  );
};

// export const dismissScreen = async () => {
//   await dismissModal(screens.sportComplex.id);
// };

export const dismissScreen = async () => {
  await pop(screens.sportComplex.id);
};

export const pushSport = async () => {
  await push({
    startId: screens.sportComplex.id,
    toScreenId: screens.sport.id,
    auth: screens.sport.auth,
    passProps: {
      sportId: 1,
      initialScreenIndex: 0
    }
  });
};

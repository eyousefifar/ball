import { Navigation } from 'react-native-navigation';
import AboutUs from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens, dismissModal } from '../../ball-library';
export const registerAboutUsScreen = () => {
  Navigation.registerComponent(screens.aboutUs.id, () =>
    gestureHandlerRootHOC(AboutUs)
  );
};

export const dismissAboutUs = async () => {
  await dismissModal(screens.aboutUs.id);
};

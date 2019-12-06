import { Navigation } from 'react-native-navigation';
import { screens, dismissModal } from '../../ball-library';
import Notifications from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export const registerNotificationsScreen = () => {
  Navigation.registerComponent(screens.notifications.id, () =>
    gestureHandlerRootHOC(Notifications)
  );
};

export const dismissNotificationsScreen = async () => {
  await dismissModal(screens.notifications.id);
};

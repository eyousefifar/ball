import { Navigation } from 'react-native-navigation';
import ChatPage from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens, dismissModal } from '../../ball-library';

export const registerChatPageUsScreen = () => {
  Navigation.registerComponent(screens.chatModal.id, () =>
    gestureHandlerRootHOC(ChatPage)
  );
};

export const dismissChatModal = async () => {
  await dismissModal(screens.chatModal.id);
};

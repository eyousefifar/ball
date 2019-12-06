import {Navigation} from 'react-native-navigation';
import Support from '../screen/Support';
// import Chat from '../screen/Chat';
import {screens, dismissModal, pop, push, showModal} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {act} from "react-test-renderer";

export const registerSupportScreen = () => {
	Navigation.registerComponent(screens.support.id, () =>
			gestureHandlerRootHOC(Support)
	);
	// Navigation.registerComponent(screens.chat.id, () =>
	//   gestureHandlerRootHOC(Chat)
	// );
};

/*export const dismissSupportScreen = async () => {
	await dismissModal(screens.support.id);
};*/

export const dismissSupportScreen = async () => {
	await pop(screens.support.id);
};

export const showChatPage = async (page_title: string,ticketId:string) => {
	await showModal({
		...screens.chatModal,
		passProps: {
			pageTitle: page_title,
			ticketId:ticketId
		}
	})
};

export const dismissChatScreen = async () => {
	await pop(screens.chat.id);
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

/*
export const pushChatScreen = async (chatId: string) => {
  push({
    startId: screens.support.id,
    toScreenId: screens.chat.id,
    auth: screens.chat.auth,
    passProps: {
      chatId
    }
  });
};
*/

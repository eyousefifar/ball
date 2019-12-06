import {Navigation} from 'react-native-navigation';
import Drawer from '../screen';
import LogoutOverlay from '../components/Logout';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {showModal, showOverlay, screens, dismissModal, dismissOverlay, push} from '../../ball-library';

export const registerDrawerScreen = () => {
    Navigation.registerComponent(screens.drawer.id, () =>
        gestureHandlerRootHOC(Drawer)
    );
    Navigation.registerComponent(screens.logout.id, () =>
        gestureHandlerRootHOC(LogoutOverlay)
    );
};

export const showProfile = async (mode: 'edit' | 'normal') => {
    await showModal({
        ...screens.profile,
        passProps: {
            mode
        }
    });
};

export const showAuth = async () => {
    await showModal({
        ...screens.authentication
    });
};

export const showReserves = async () => {
    await showModal({
        ...screens.reservationList
    });
};

export const showSupport = async () => {
    await push({
        startId: screens.home.id,
        toScreenId: screens.support.id,
        auth: false
    });

    await Navigation.mergeOptions(screens.support.id, {
        sideMenu: {
            right: {
                visible: false
            }
        }
    });
};

export const closeDrawer = async () => {
    await Navigation.mergeOptions(screens.home.id, {
        sideMenu: {
            right: {
                visible: false
            }
        }
    });
};

export const showNotifications = async () => {
    await showModal({
        ...screens.notifications
    });
};
export const showAboutUs = async () => {
    await showModal({
        ...screens.aboutUs
    });
};

export const showLogout = async () => {
    await showOverlay({
        ...screens.logout
    });
};

export const dismissLogoutOverLay = async () => {
    await dismissOverlay(screens.logout.id)
};

export const showWallet = async () => {
    await showModal({
        ...screens.wallet
    });
};

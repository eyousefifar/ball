import {Navigation} from 'react-native-navigation';
import RatingPage from '../screen';
import RatingAuthOverlay from './../components/RatingAuthOverlay'
import RatingOverlay from '../components/RatingOverlay'
import {screens, dismissModal, showOverlay, dismissOverlay} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export const registerRatingScreen = () => {
	Navigation.registerComponent(screens.ratingPage.id, () =>
			gestureHandlerRootHOC(RatingPage)
	);

	Navigation.registerComponent(screens.ratingAuth.id, () =>
			gestureHandlerRootHOC(RatingAuthOverlay)
	);

	Navigation.registerComponent(screens.ratingOverlay.id, () =>
			gestureHandlerRootHOC(RatingOverlay)
	);

};

export const dismissRatingPage = async () => {
	await dismissModal(screens.ratingPage.id);
};

export const showRatingAuth = async (/*providerId: string*/) => {
	await showOverlay({
		...screens.ratingAuth,
		/*passProps: {
			providerId
		}*/
	});
};

export const dismissRatingAuthOverlay = async () => {
	await dismissOverlay(screens.ratingAuth.id);
};

export const showRatingOverlay = async (sportId: string, sportType: string) => {
	await showOverlay({
		...screens.ratingOverlay,
		passProps: {
			sportId: sportId,
			sportType: sportType
		}
	});
};
export const dismissRatingOverlay = async () => {
	await dismissOverlay(screens.ratingOverlay.id);
};


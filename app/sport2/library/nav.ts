import { Navigation } from 'react-native-navigation';

import Sport from '../screen';
import RatingOverlay from '../components/RatingOverlay';
import {screens, dismissOverlay, showModal, pop} from '../../ball-library';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
export const registerSportScreen = () => {
  Navigation.registerComponent(screens.sport.id, () =>
    gestureHandlerRootHOC(Sport)
  );
  Navigation.registerComponent(screens.rating.id, () =>
    gestureHandlerRootHOC(RatingOverlay)
  );
};

export const dismissRatingOverlay = async () => {
  await dismissOverlay(screens.rating.id);
};

export const showRatingPage = async (sportId:string,sportType:string) => {
  await showModal({
    ...screens.ratingPage,
    passProps:{
      sportId:sportId,
      sportType:sportType,
    }
  });
};

export const dismissSport = async () => {
  await pop(screens.sport.id)
};


export const showChatModal = async (ticketId:string,sportName:string) => {
  await showModal({
    id:screens.chatModal.id,
    auth:true,
    passProps:{
      ticketId:ticketId,
      pageTitle:sportName
    }
  })
};

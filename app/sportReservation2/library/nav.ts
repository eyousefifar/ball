import {Navigation} from 'react-native-navigation';
import SportReservation from '../screen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {pop, push, screens, showModal} from "../../ball-library";
import {IReserveCard, ISelectedReserves, ItemSelected, ReserveItemServer} from "../store/types";


export const registerSportReservationScreen = () => {
	Navigation.registerComponent(screens.sportReservation.id, () =>
			gestureHandlerRootHOC(SportReservation)
	);
};

export const dismissSportReservationScreen = async () => {
	await pop(screens.sport.id)
};

export const showFinalReserve = async (reservedItems: any, finalPrice: number, finalDiscount: number,requestItems: Array<ReserveItemServer>,sportId:string) => {
	await push({
		startId: screens.sport.id,
		toScreenId: screens.finalReserve.id,
		auth: true,
		passProps: {
			reservedItems: reservedItems,
			finalPrice: finalPrice,
			finalDiscount: finalDiscount,
			requestItems:requestItems,
			sportId:sportId
		}
	});
};

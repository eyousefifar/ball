import React from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {showFinalReserve} from "../../../library/nav";
import {ISelectedReserves, ReserveItemServer} from "../../../store/types";

interface IFinalPrice {
	final_price: number,
	final_discount: number,
	reserved_items: any,
	sportId:string
}

const FinalPrice = (props: IFinalPrice) => {

	const styles = styleGenerator();
	const {final_price, final_discount, reserved_items,sportId} = props;

	const handleReserveItems = (reserved_items:any) : Array<ReserveItemServer> => {

		let reservedItems : Array<ReserveItemServer> = [];

		for (let item in reserved_items){
			reservedItems.push({
				sportSiteSessionUUID: reserved_items[item].uuid,
				count: reserved_items[item].amount
			})
		}

		// console.warn('reservedItems : ',reservedItems);

		return reservedItems;

	};

	const goToPaymentPage = async () => {
		if (Object.values(reserved_items).length === 0){
			ToastAndroid.show('سبد خرید شما خالی ست',ToastAndroid.SHORT)
		}else {
			let requestItems = await handleReserveItems(reserved_items);
			await showFinalReserve(reserved_items, final_price, final_discount,requestItems,sportId)
		}
	};

	return (
			<View style={styles.price_section}>

				<View style={styles.final_price_section}>
					<Text style={styles.final_price}>{final_price} <Text style={{fontSize: 12}}>تومان</Text></Text>
					<Text style={styles.final_discount}>سود شما : {final_discount}</Text>
				</View>

				<RectButton style={styles.submit_button} onPress={goToPaymentPage}>
					<Text style={styles.submit_button_text}>تایید</Text>
				</RectButton>

			</View>
	);
};

export default observer(FinalPrice);

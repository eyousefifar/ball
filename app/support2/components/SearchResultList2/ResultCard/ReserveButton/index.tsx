import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
import {showChatPage} from "../../../../library/nav";
import {phonecall} from "react-native-communications";
// TODO : OnPress on chat button
// import {showSportReserve} from "../../../../library/nav";

interface IReserveButton {
	pageTitle : string,
	ticketId:string,
	sportSiteNumber:string

}

const ReserveButton = (props: IReserveButton) => {
	const styles = styleGenerator();
	const {pageTitle,ticketId,sportSiteNumber} = props;

	const handleChatPage = async () => {
		await showChatPage(pageTitle,ticketId)
	};

	const handleCall = async () => {
		await phonecall(sportSiteNumber, true);
	};

	return (
			<View style={styles.container}>
				<RectButton style={styles.reserve_button} onPress={handleChatPage}>
					<Text style={styles.reserve_button_text}>چت</Text>
				</RectButton>

				<View style={styles.location_button_container}>
					<RectButton style={styles.location_button} onPress={handleCall}>
						<Text style={styles.location_button_text}>تماس</Text>
					</RectButton>
				</View>
			</View>

	);
};

export default observer(ReserveButton);

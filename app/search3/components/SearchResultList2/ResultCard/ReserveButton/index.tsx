import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
import {showSportReserve} from "../../../../library/nav";
import {mapLink} from "../../../../../ball-library";

interface IReserveButton {
	sportId:string,
	coordinate:Array<number>
}

const ReserveButton = (props: IReserveButton) => {
	const styles = styleGenerator();
	const {sportId,coordinate} = props;

	const handleLocationButton = async () => {
		await mapLink({
			lat: coordinate[0],
			long: coordinate[1]
		});
	};

	const handleShowSportReserve = async () => {
		await showSportReserve(sportId)
	};

	return (
			<View style={styles.container}>
				<RectButton style={styles.reserve_button} onPress={handleShowSportReserve} >
					<Text style={styles.reserve_button_text}>رزرو</Text>
				</RectButton>

				<View style={styles.location_button_container}>
					<RectButton style={styles.location_button} onPress={handleLocationButton}>
						<Text style={styles.location_button_text}>مکان نما</Text>
					</RectButton>
				</View>
			</View>

	);
};

export default observer(ReserveButton);

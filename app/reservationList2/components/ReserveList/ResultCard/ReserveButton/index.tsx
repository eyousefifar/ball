import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
import {showCancelReserve, showQrCode} from "../../../../library/nav";
import {number} from "yup";

interface IReserveButton {
	reserveId:string
	code:string,
}

const ReserveButton = (props: IReserveButton) => {
	const styles = styleGenerator();
	const {reserveId,code} = props;

	const handleCancel = async () => {
		await showCancelReserve(reserveId)
	};

	const handleShowQrCode = async () => {
		await showQrCode(code,reserveId)
	};

	return (
			<View style={styles.container}>
				<RectButton style={styles.reserve_button} onPress={handleShowQrCode}>
					<Text style={styles.reserve_button_text}>نمایش بلیط</Text>
				</RectButton>

				<View style={styles.location_button_container}>
					<RectButton style={styles.location_button} onPress={handleCancel}>
						<Text style={styles.location_button_text}>لغو رزرو</Text>
					</RectButton>
				</View>
			</View>

	);
};

export default observer(ReserveButton);

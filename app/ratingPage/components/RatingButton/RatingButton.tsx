import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";
import {showRatingOverlay} from "../../library/nav";

interface IRatingButton {
	sportId: string,
	sportType: string
}

const RatingButton = (props: IRatingButton) => {

	const styles = styleGenerator();
	const {sportId, sportType} = props;

	const handleRatingPage = async () => {
		await showRatingOverlay(sportId, sportType)
	};

	return (
			<View style={styles.container}>
				<RectButton style={styles.button} onPress={handleRatingPage}>
					<Text style={styles.submit_text}>ثبت نظر</Text>
				</RectButton>
			</View>
	);
};

export default observer(RatingButton);

import React from 'react';
import {Provider} from 'react-native-paper';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors} from '../../../ball-library';
import Rating from "../Rating";
// TODO : register overlay &  dismiss
import {ratingStore} from '../../store/RatingStore'
import {dismissRatingOverlay} from "../../library/nav";
import {postComment} from "../../library/api";

interface IRatingOverlay {
	sportId:string,
	sportType:string
}

const RatingOverlay = (props:IRatingOverlay) => {
	const styles = styleGenerator();

	const {sportType,sportId} = props;

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Touchable
							style={{zIndex: -1}}
							onPress={dismissRatingOverlay}
							rippleColor={'lightGrey'}
					/>
					<View style={styles.cardContainer}>
						<Rating rateItems={ratingStore.ratingItems} sportType={sportType} sportId={sportId}/>
					</View>
				</View>
			</Provider>
	);

};

export default observer(RatingOverlay);

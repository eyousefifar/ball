import React from 'react';
import {Provider} from 'react-native-paper';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {Touchable, defaultTheme} from '../../../ball-library';
// local
import {dismissRatingAuthOverlay} from "../../library/nav";
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";

class RatingAuthOverlay extends React.Component {
	render() {
		const styles = styleGenerator();
		return (
				<Provider theme={defaultTheme}>
					<View style={styles.container}>
						<Touchable
								style={{zIndex: -1}}
								onPress={dismissRatingAuthOverlay}
								rippleColor={'lightGrey'}
						/>
						<View style={styles.cardContainer}>

							<View style={{paddingHorizontal:32,paddingTop:32,paddingBottom:64,backgroundColor:'#fff'}}>
								<Text style={styles.popup_text}>برای امتیاز دادن به این مجموعه ابتدا باید رزروی انجام بدهید !</Text>
							</View>

							<RectButton style={styles.reserve_button} onPress={dismissRatingAuthOverlay}>
								<Text style={styles.reserve_button_text}>رزرو</Text>
							</RectButton>
						</View>
					</View>
				</Provider>
		);
	}
}

export default observer(RatingAuthOverlay);

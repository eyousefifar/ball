import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from 'react-native-gesture-handler'
// styles
import styleGenerator from './styles';
import {showIncreaseCashOverlay} from "../../library/nav";

interface IIncreaseCard {
	amount:number,
	activeDiscount:number
}

const IncreaseCard = (props:IIncreaseCard) => {

	const styles = styleGenerator();
	const {amount,activeDiscount} = props;

	const testDiscount = activeDiscount != undefined ? activeDiscount : 5000;

	return (
			<View style={styles.container}>
					<View style={styles.price_item}>
						<Text style={styles.title_text}>موجودی</Text>
						<View style={styles.price_container}>
							<Text style={styles.price_text}>{amount}</Text>
							<Text style={styles.rial_text}>تومان</Text>
						</View>
					</View>

					<View style={styles.price_item}>
						<Text style={styles.title_text}>تخفیف فعال شما</Text>
						<View style={styles.price_container}>
							<Text style={styles.price_text}>{testDiscount}</Text>
							<Text style={styles.rial_text}>تومان</Text>
						</View>
					</View>

					<RectButton style={styles.inc_btn} onPress={showIncreaseCashOverlay}>
						<Text style={styles.inc_btn_text}>افزایش موجودی</Text>
					</RectButton>
				</View>
	);
};

export default observer(IncreaseCard);

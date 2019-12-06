import React from 'react';
import {View,Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Transaction} from "../../../store/types";
import {Colors} from "../../../../ball-library/theme";

const TransactionItem = (props: Transaction) => {

	const styles = styleGenerator();
	const {price, date, time, payedFor, paymentType} = props;

	const payDesc = payedFor ? payedFor : 'افزایش اعتبار';

	return (
			<View style={styles.container}>

				<View style={styles.row}>
					<Text style={[styles.text, paymentType === 'inc' && {color:Colors.greenBall}]}>{price} تومان</Text>
					<Text style={[styles.text, paymentType === 'inc' && {color:Colors.greenBall}]}>{date}</Text>
				</View>

				<View style={styles.row}>
					<Text style={[styles.text, paymentType === 'inc' && {color:Colors.greenBall}]}>{payDesc}</Text>
					<Text style={[styles.text, paymentType === 'inc' && {color:Colors.greenBall}]}>{time}</Text>
				</View>

			</View>
	);
};

export default observer(TransactionItem);

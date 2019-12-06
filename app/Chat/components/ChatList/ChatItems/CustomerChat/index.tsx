import React from 'react';
import {View,Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

interface ICustomerChat {
	message: string
}

const CustomerChat = (props: ICustomerChat) => {

	const styles = styleGenerator();
	const {message} = props;

	return (
			<View style={styles.container}>
				<Text style={styles.chat_text}>{message}</Text>
			</View>
	);
};

export default observer(CustomerChat);

import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

interface IProviderChat {
	message: string
}

const ProviderChat = (props: IProviderChat) => {

	const styles = styleGenerator();
	const {message} = props;

	return (
			<View style={styles.container}>
				<Text style={styles.chat_text}>{message}</Text>
			</View>
	);
};

export default observer(ProviderChat);

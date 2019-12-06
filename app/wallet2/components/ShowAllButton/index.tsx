import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";
import {showTransactions} from "../../library/nav";

interface IShowAllButton {
	walletId:string
}

const ShowAllButton = (props:IShowAllButton) => {

	const styles = styleGenerator();
	const {walletId} = props;



	const handleShowAllTransactionsPage = async () => {
		await showTransactions(walletId)
	};

	return (
			<View style={styles.container}>
				<RectButton style={styles.button} onPress={handleShowAllTransactionsPage}>
					<Text style={styles.submit_text}>مشاهده همه</Text>
				</RectButton>
			</View>
	);
};

export default observer(ShowAllButton);

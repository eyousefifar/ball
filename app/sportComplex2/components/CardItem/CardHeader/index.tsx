import React from 'react';
import {Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {Icon} from '../../../../ball-library';

interface CardHeader {
	header_text: string
}

const CardHeader = (props: CardHeader) => {
	const styles = styleGenerator();
	const {header_text} = props;

	// const handleSearchGroupNavigation = async () => {
	//   await searchGroup(header_text)
  // };

	return (
			<RectButton style={styles.header_container} onPress={() => {}}>
				<Text style={styles.header_list_text}>{header_text}</Text>
				<Icon type={'ion'} name={'md-arrow-round-back'} size={20} color={'#767676'}/>
			</RectButton>
	);
};

export default observer(CardHeader);

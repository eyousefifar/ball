import React from 'react';
import {Text} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {Colors, Icon} from "../../../../../ball-library";
import {searchGroup} from "../../../../library/nav";

interface CardHeader {
	title: string,
	query:string,
}

const CardHeader = (props: CardHeader) => {
	const styles = styleGenerator();
	const {title,query} = props;

	const handleSportGroup = async () => {
	  await searchGroup(title,query)
  };

	return (
			<RectButton style={styles.header_container} onPress={handleSportGroup}>
				<Text style={styles.header_list_text}>{title}</Text>
				<Icon type={'ion'} name={'md-arrow-round-back'} size={20} color={Colors.titleBarLines}/>
			</RectButton>
	);
};

export default observer(CardHeader);

import React from 'react';
import {View,Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {RectButton} from "react-native-gesture-handler";

interface IMapSearchBar {
	mapSwitch: () => void
}

const MapSearchBar = (props: IMapSearchBar) => {

	const styles = styleGenerator();
	const {mapSwitch} = props;

	return (
			<RectButton style={styles.searchBar_container} onPress={mapSwitch}>
				<Text style={styles.searchBar_text}>جستجو</Text>
			</RectButton>
	);
};

export default observer(MapSearchBar);

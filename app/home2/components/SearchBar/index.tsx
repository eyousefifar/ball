import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RectButton} from "react-native-gesture-handler";

// styles
import styleGenerator from './styles';
import {Icon} from "../../../ball-library";

interface SearchBar {
	onSearchBoxPress: () => void,
	onMenuPress: () => void,
	onMapBoxPress: () => void,
	searchText: string,
}

const SearchBar = (props: SearchBar) => {

	const styles = styleGenerator();
	const {onSearchBoxPress, onMenuPress, onMapBoxPress, searchText} = props;

	return (
			<View style={styles.searchBar_container_area}>
				<View style={styles.searchBar_container}>

					<RectButton style={styles.right_section} onPress={onMenuPress}>
						<Icon type={'simpleLine'} name={'menu'} size={22} color={'#9e9e9e'}
						      style={styles.menu_icon}/>
					</RectButton>


					<RectButton style={styles.middle_section} onPress={onSearchBoxPress}>
						<View style={styles.middle_section_text_container}>
							<Text style={styles.search_text}>{searchText}</Text>
						</View>
					</RectButton>


					<View style={styles.left_section}>
						<View style={styles.left_section_container_box}>
							<RectButton style={styles.left_section_container_box} onPress={onMapBoxPress}>
								<Text style={styles.left_section_text}>نقشه</Text>
							</RectButton>
						</View>
					</View>

				</View>
			</View>
	);
};

export default observer(SearchBar);

import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.primaryPurple,
			paddingHorizontal: 16
		},
		search_container:{
			width: '100%',
			backgroundColor: '#fefefe',
			alignSelf: 'center',
			elevation: 2,
			borderRadius: Radius.typeButton_4,
			overflow: 'hidden',
			paddingHorizontal:8,
			paddingVertical:8
		}

	});
};

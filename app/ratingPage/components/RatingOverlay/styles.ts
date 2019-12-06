import {StyleSheet} from 'react-native';
import {Colors} from "../../../ball-library/theme";

export default () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.transparentGrey,
			alignItems: 'center',
			justifyContent: 'center'
		},
		cardContainer: {
			width: '80%',
			backgroundColor: 'white',
			borderRadius: 12,
			zIndex: 1,
			alignItems: 'center',
			justifyContent:'center',
			overflow:'hidden'
		},
	});
};

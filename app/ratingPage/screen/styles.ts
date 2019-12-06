import {StyleSheet} from 'react-native';
import {Radius} from "../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		comments_container: {
			borderWidth: 0.9,
			borderColor: 'rgba(0,0,0,0.5)',
			borderRadius: Radius.typeButton_4,

			paddingVertical:8
		}
	});
};

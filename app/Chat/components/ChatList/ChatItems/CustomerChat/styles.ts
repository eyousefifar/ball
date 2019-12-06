import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container: {
			width: '100%',
			backgroundColor: Colors.primaryPurple,

			paddingHorizontal: 16,
			paddingVertical: 8,

			marginVertical:8,

			borderTopRightRadius: Radius.typeButton_4,
			borderTopLeftRadius:  Radius.typeButton_4,
			borderBottomLeftRadius:  Radius.typeButton_4
		},
		chat_text: {
			color: Colors.whiteBall,
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 13,
			lineHeight:25

		}
	});
};

import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container: {
			width: '100%',

			marginVertical:8,

			paddingHorizontal: 16,
			paddingVertical: 8,

			borderWidth:0.9,
			borderColor:'rgba(0,0,0,0.4)',

			borderTopRightRadius:  Radius.typeButton_4,
			borderTopLeftRadius:  Radius.typeButton_4,
			borderBottomRightRadius:  Radius.typeButton_4
		},
		chat_text: {
			color: Colors.titleBarLines,
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 13,
			lineHeight:25
		}
	});
};

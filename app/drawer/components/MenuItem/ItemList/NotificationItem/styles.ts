import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',
			flexDirection:'row-reverse',

			alignItems: 'center',
			// justifyContent: 'center',

			paddingLeft:24,
			marginVertical:4
		},
		notification_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
			color:Colors.titleBarLines,
			marginRight:4
		}
	});
};

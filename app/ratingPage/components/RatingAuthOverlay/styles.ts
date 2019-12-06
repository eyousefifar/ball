import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";

export default () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.transparentGrey,
			alignItems: 'center',
			justifyContent: 'center'
		},
		cardContainer: {
			width: '70%',
			backgroundColor: 'white',
			borderRadius: Radius.typeButton_4,
			zIndex: 1,
			alignItems: 'center',
			justifyContent:'center',
			overflow:'hidden'
		},
		popup_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:15,
		},
		reserve_button:{
			width: '100%',
			backgroundColor:Colors.primaryPurple,
			position:'absolute',
			bottom:0,
			alignItems:'center'

		},
		reserve_button_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			color:'#fff',
			fontSize:14,
			marginVertical:8
		}
	});
};

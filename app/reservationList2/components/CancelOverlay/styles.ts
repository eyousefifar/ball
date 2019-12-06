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
		popup_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:15,
		},

		two_buttons:{
			width:'100%',
			height:45,
			flexDirection:'row-reverse',
			justifyContent:'space-between',
			borderWidth:0.6,
			borderColor:Colors.primaryPurple,
			borderBottomLeftRadius:8,
			borderBottomRightRadius:8,
		},

		reserve_button:{
			width: '50%',
			height:'100%',
			backgroundColor:Colors.primaryPurple,
			alignItems:'center',
			justifyContent:'center',
			// position:'absolute',
			// bottom:0

		},
		reserve_button_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			color:'#fff',
			fontSize:14,
			// marginVertical:8
		}
	});
};

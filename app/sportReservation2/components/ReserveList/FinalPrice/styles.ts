import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		price_section:{
			width:'100%',
			height: 45,

			position:'absolute',
			bottom:0,

			paddingHorizontal:16,
			paddingVertical:4,

			flexDirection:'row-reverse',
			backgroundColor:Colors.primaryPurple
		},

		submit_button:{
			width:'50%',
			height:'100%',
			borderRadius: Radius.typeButton_4,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor:'#fff'
		},
		submit_button_text:{
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 14,
			color:Colors.primaryPurple
		},

		final_price_section:{
			width:'50%',
			height:'100%',
			alignItems: 'center',
			justifyContent: 'center'
		},
		final_price:{
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 16,
			color:'#fff',
			// marginBottom:4
		},
		final_discount:{
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 12,
			color:'#b1b1b1',
			marginTop:-4
		}
	});
};

import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({

		ticket_container:{
			width:'100%',
			flexDirection:'row-reverse',

			justifyContent:'space-between',

			borderWidth:0.9,
			borderColor:Colors.titleBarLines,
			borderRadius: Radius.typeButton_4,

			paddingHorizontal:16,
			paddingVertical:8,

			marginBottom:8
		},
		row_item:{
			width: '100%',
			flexDirection:'row-reverse',
			justifyContent:'space-between'
		},
		price:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
			color:Colors.titleBarLines,
		},
		day:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
			color:'#717171',
		}
	});
};

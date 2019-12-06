import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			flexDirection:'row-reverse',

			alignItems: 'center',
			justifyContent: 'space-between',

			paddingHorizontal:24,
			marginVertical:4
		},

		reserve_name_container:{
			flexDirection: 'row-reverse',
			alignItems: 'center',
			justifyContent: 'center'
		},
		reserve_name_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:13,
			color:Colors.titleBarLines,
			marginRight:4,
		},


		reserve_time:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:11,
			color:Colors.titleBarLines,
		},
		reserve_date:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:11,
			color:Colors.titleBarLines,
			marginRight:4,
		}

	});
};

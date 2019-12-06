import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container: {
			width: '100%',
		},

		empty_box_container:{
			width:'100%',
			height:90,
			paddingHorizontal:16,
			paddingVertical:8
		},
		empty_box:{
			width:'100%',
			height:'100%',
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth:0.6,
			borderColor:Colors.titleBarLines,
			borderRadius:Radius.typeButton_4,
		},
		empty_box_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			color:Colors.titleBarLines,
			fontSize:13
		}
	});
};

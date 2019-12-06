import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			borderWidth:0.9,
			borderColor:'rgba(0,0,0,0.5)',
			borderRadius:Radius.typeButton_4,

			paddingVertical:8,
			paddingHorizontal:16,

			marginTop:4,
			marginBottom:6
		},


		row:{
			width:'100%',

			flexDirection:'row-reverse',

			alignItems: 'center',
			justifyContent: 'space-between'
		},

		text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
			color:Colors.primaryPurple
		}

	});
};

import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'86%',
			height:40,

			alignItems: 'center',
			justifyContent: 'center',
			alignSelf:'center',

			borderRadius:Radius.typeButton_4,

			backgroundColor:Colors.primaryPurple,

			marginTop:8,
		},
		submit_text:{
			fontSize:16,
			color:Colors.whiteBall,
			fontFamily:'IRANSansMobile(FaNum)'
		}
	});
};

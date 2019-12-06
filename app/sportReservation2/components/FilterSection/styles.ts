import {StyleSheet} from 'react-native';
import {Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			paddingTop:16,
			paddingBottom:2,
			paddingHorizontal:16,

			borderWidth:0.9,
			borderColor:'rgba(0,0,0,0.4)',
			borderRadius: Radius.typeButton_4,
		}
	});
};

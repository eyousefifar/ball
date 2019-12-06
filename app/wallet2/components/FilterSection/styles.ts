import {StyleSheet} from 'react-native';
import {Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',


			paddingVertical:16,
			paddingHorizontal:16,

			borderWidth:0.9,
			borderColor:'rgba(0,0,0,0.4)',
			borderRadius:Radius.typeButton_4,

			marginBottom:8
		}
	});
};

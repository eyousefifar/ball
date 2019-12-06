import {StyleSheet} from 'react-native';


export default () => {
	return StyleSheet.create({
		container:{
			flex:1,
			paddingHorizontal:16
		},
		box_container:{
			width:'100%',
			height:'95%',
			// maxHeight:'95%',
			elevation:2,
			backgroundColor:'#fefefe',
			borderRadius:16,
			paddingVertical:8,
			paddingHorizontal: 8

		}
	});
};

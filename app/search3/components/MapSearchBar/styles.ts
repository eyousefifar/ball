import {StyleSheet} from 'react-native';


export default () => {
	return StyleSheet.create({
		searchBar_container:{
			width:'100%',
			backgroundColor:'#fff',
			alignItems:'center',
			borderRadius:8
		},
		searchBar_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:16,
			color:'#727272',
			marginVertical:6
		}

	});
};

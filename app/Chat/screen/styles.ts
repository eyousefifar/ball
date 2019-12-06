import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			flex:1,
			justifyContent:'flex-end',
			paddingHorizontal:16,
			paddingVertical:8
		},

		input_box_container:{
			flexDirection:'row-reverse',
			width:'100%',
			// height:60,
			borderRadius:Radius.typeButton_4,
			borderWidth:0.7,
			borderColor:'rgba(114,0,202,0.5)',
			paddingHorizontal:8,
			// paddingVertical:2
			// marginTop:8
		},
		input_box:{
			flex:1,
			maxHeight:70,
			paddingRight:16,
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:14,
			textAlign:'right',
			color:Colors.titleBarLines
		},
		send_box:{
			width: 35,
			height: 35,
			borderRadius:Radius.typeButton_4,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf:'center',
			backgroundColor:Colors.primaryPurple,
			flexShrink:1
		},
		send_icon:{
			transform:[{rotateY:'180deg'}]
		}

	});
};

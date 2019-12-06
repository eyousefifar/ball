import {StyleSheet} from 'react-native';

export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',
			flex:1,
			paddingHorizontal:8,
			// marginBottom:8,
			// backgroundColor:'green',
			marginTop:-16
		},

		comment_container:{
			width: '100%',
			paddingTop:16,

		},

		comment_list:{
			paddingHorizontal:8
		},

		top_section:{
			width:'100%',
			height:40,
			flexDirection:'row-reverse',
		},
		avatar_container:{
			height:'100%',
			backgroundColor: 'red'
		},
		user_info:{
			height:'100%',
			alignItems:'flex-end',
			marginRight: 12
		},
		user_name_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
		},

		rating_container:{
			flexDirection: 'row-reverse',
			alignItems: 'center'
		},
		score_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:12,
			marginRight:4
		},

		comment_content_container:{
			paddingHorizontal: 8,
			width:'100%',
			marginVertical:16
		},
		comment_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:11,
			lineHeight:20,
			color:'#7200ca'
		},
		line:{
			width:'96%',
			height:0.8,
			backgroundColor:'rgba(0,0,0,0.4)'
		}

	});
};

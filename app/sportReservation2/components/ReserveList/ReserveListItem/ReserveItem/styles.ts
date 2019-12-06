import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../../ball-library/theme";

export default () => {
	return StyleSheet.create({
		container: {
			width: 120,
			height: '100%',

			alignItems: 'center',
			justifyContent:'space-between',

			borderWidth: 0.9,
			borderColor: 'rgba(0,0,0,0.5)',
			borderRadius: Radius.typeButton_4,

			marginLeft: 8,

			paddingHorizontal: 8,
			paddingVertical: 8,

			// overflow: 'hidden',
			transform: [{rotateY: '180deg'}],
			zIndex: 0
		},

		reserve_text: {
			fontFamily: 'IRANSansMobile(FaNum)_Medium',
			fontSize: 12,
			color: '#212121',
			marginTop: 8
		},
		reserve_price: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 16,
			color: Colors.greenBall,

		},
		reserve_without_discount: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 12,
			color: Colors.titleBarLines,
			textDecorationLine: 'line-through'
		},

		reserve_button_single_container: {
			width: '100%',
			height: 25,
			borderRadius: Radius.typeButton_4,
			overflow: 'hidden',
			// position: 'absolute',
			// bottom: 8,
			borderWidth: 0.9,
			borderColor: Colors.titleBarLines
		},

		reserve_button_single_container_selected: {
			backgroundColor: Colors.primaryPurple,
			borderWidth: 0,
			// borderColor: 'rgba(0,0,0,0.6)'
		},

		reserve_button_single: {
			width: '100%',
			height: 25,
			// backgroundColor:Colors.primaryPurple,
			alignItems: 'center',
			justifyContent: 'center',
		},
		reserve_button_single_text: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 12,
			color: Colors.titleBarLines,
		},
		reserve_button_single_text_selected: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 12,
			color: Colors.whiteBall,
		},

		multi_reserve_button_container: {
			width: '100%',
			height: 25,
			// position: 'absolute',
			// bottom: 8,
			flexDirection: 'row-reverse',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		sign_button_container: {
			width: 25,
			height: 25,
			borderRadius: Radius.typeButton_4,
			backgroundColor: Colors.primaryPurple,
			alignItems: 'center',
			justifyContent: 'center'
		},
		sign_text: {
			fontFamily: 'IRANSansMobile(FaNum)_Medium',
			color: Colors.whiteBall,
			fontSize: 17
		},

		minus_sign:{
			width:'50%',
			height:2,
			backgroundColor:Colors.whiteBall
		},
		plus_sign_hor:{
			position: 'absolute',
			margin:'auto',

			width:'50%',
			height:2,
			backgroundColor:Colors.whiteBall,
		},
		plus_sign_ver:{
			position: 'absolute',
			margin:'auto',

			width:2,
			height:'50%',
			backgroundColor:Colors.whiteBall
		},

		reserve_count: {
			fontFamily: 'IRANSansMobile(FaNum)',
			color: '#212121',
			fontSize: 15
		},

		discount_container: {
			position: 'absolute',
			top: -1,
			left: -1,
			zIndex:2,

			paddingHorizontal: 4,

			backgroundColor: Colors.redDiscount,

			alignItems: 'center',
			justifyContent: 'center',

			borderTopStartRadius: 6,
			borderBottomEndRadius: 8
		},
		discount_text: {
			fontFamily: 'IRANSansMobile(FaNum)',
			color: Colors.whiteBall,
			fontSize: 10
		}

	});
};

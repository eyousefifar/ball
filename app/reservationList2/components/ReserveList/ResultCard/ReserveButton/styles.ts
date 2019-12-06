import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container: {
			flexShrink: 1,
			height: '100%',
			justifyContent: 'center'
		},
		reserve_button: {
			width: 80,
			borderRadius: 4,
			alignItems: 'center',
			backgroundColor: Colors.primaryPurple
		},
		reserve_button_text: {
			fontFamily: 'IRANSansMobile(FaNum)_Medium',
			color: '#fff',
			fontSize:13,
			marginVertical: 4
		},

		location_button_container: {
			width: 80,
			borderRadius: 4,
			marginTop: 4,
			borderColor: Colors.redCancel,
			borderWidth: 0.9
		},
		location_button: {
			width: '100%',
			borderRadius: 4,
			// backgroundColor:Colors.redCancel,
			overflow: 'hidden',
			alignItems: 'center',

		},
		location_button_text: {
			fontFamily: 'IRANSansMobile(FaNum)_Medium',
			fontSize: 11,
			color: Colors.redCancel,
			marginVertical: 4
		},

	});
};

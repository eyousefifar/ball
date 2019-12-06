import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({

		empty_box: {
			width: '100%',
			height: 70,
			alignItems: 'center',
			justifyContent: 'center',

			borderWidth: 0.9,
			borderColor: 'rgba(0,0,0,0.4)',
			borderRadius: Radius.typeButton_4,
		},
		empty_box_text: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 12,
			color: '#717171'
		},

		reserve_list: {
			width: '100%',
			// marginBottom:50
		},

		reserve_list_content: {
			alignItems: 'flex-end'
		},



	});
};

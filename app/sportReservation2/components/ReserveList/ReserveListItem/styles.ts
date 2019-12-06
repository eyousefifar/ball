import {StyleSheet} from 'react-native';
import {Radius} from "../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		reserve_container: {
			width: '100%',
			height: 150,
			flexDirection: 'row-reverse',
			alignItems: 'center',
			marginBottom: 8,
			// backgroundColor: 'yellow'
		},

		reserve_title_box: {
			width: 55,
			height: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: Radius.typeButton_4,
			borderWidth: 0.9,
			borderColor: 'rgba(0,0,0,0.5)',
			marginLeft: 8,
			flexShrink: 1
		},

		header_time: {
			color: '#717171',
			fontFamily: 'IRANSansMobile(FaNum)'
		},
		reserve_list: {
			flex: 1,
			height: '100%',
			transform: [{rotateY: '180deg'}]
		}
	});
};

import {StyleSheet} from 'react-native';
import {Colors} from "../../../ball-library/theme";


export default () => {
	// const {width} = Dimensions.get('window');
	// const item_width  = width * 7 / 10;

	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			zIndex: 1
		},
		logoutContainer: {
			width: '80%',
			// height : item_width,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
			backgroundColor: 'white',
			zIndex: 2,
			borderRadius: 16,
			paddingVertical: 40
		},
		ticket_code_container: {
			width: 164,
			height: undefined,
			borderWidth: 0.6,
			borderColor: Colors.primaryPurple,
			borderRadius: 8,
			alignItems: 'center',
			backgroundColor: '#f6f6f6',
			paddingVertical: 4,
			marginTop: 16
		},
		ticket_code_header: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 10,
			color: '#616161',
		},
		ticket_code_number: {
			fontFamily: 'IRANSansMobile(FaNum)_Medium',
			fontSize: 16,
			color: '#515151',
		}
	});
};

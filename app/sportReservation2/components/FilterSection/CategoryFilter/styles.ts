import {StyleSheet} from 'react-native';

export default () => {
	return StyleSheet.create({
		horizontal_lists: {
			transform: [{rotateY: '180deg'}],
			width: '100%',
			flexGrow:1,
			marginTop:4,
			alignSelf: 'center'
		},
		filters_container: {
			paddingVertical: 4,
			// width: '100%',
			justifyContent: 'center',

			alignItems: 'center',
			alignSelf: 'center',
			// backgroundColor:'red'
		}
	});
};

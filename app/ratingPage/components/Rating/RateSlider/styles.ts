import {StyleSheet} from 'react-native';


export default () => {
	return StyleSheet.create({
		container: {
			// flexShrink: 1,
			flexDirection: 'row-reverse',
			// backgroundColor:'rgba(159,238,80,0.36)',
			// paddingVertical:8,
			marginVertical:2
		},
		titleContainer: {
			flex: 2,
			alignItems: 'flex-end',
			justifyContent: 'center',
			paddingRight: 16
		},
		slideContainer: {
			flex: 3,
			justifyContent: 'center',
			marginTop:10
		},
		slider: {
			width: '100%'
		},
		sliderNumber: {
			flexDirection: 'row',
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			paddingHorizontal: 16
		},
		number: {
			fontSize: 10,
			textAlign: 'center',
			fontFamily:'IRANSansMobile(FaNum)'
		},
		slider_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize: 12,
			color:'#000'
		}
	});
};

import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";
import {widthPercentageToDP} from "react-native-responsive-screen";

export default () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.transparentGrey,
            alignItems: 'center',
            justifyContent: 'center'
        },
        cardContainer: {
            width: '80%',
            backgroundColor: 'white',
            borderRadius: Radius.typeButton_4,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        },
        popup_text: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 15,
        },
		input_container:{
			width: '70%',
			alignSelf:'center',
			height: 120,

			marginVertical: 8,
			marginBottom: 64,
		},
        price_input: {
            width: '100%',
			height: 45,

			alignSelf: 'center',

            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 16,
            textAlign: 'center',

			marginBottom:8,


            borderBottomWidth: 0.9,
            borderBottomColor: 'rgba(0,0,0,0.5)'
        },
		error_text:{
			fontSize:12,
			color:Colors.redDiscount,
			fontFamily:'IRANSansMobile(FaNum)'
		},
        reserve_button: {
            width: '100%',
            backgroundColor: Colors.primaryPurple,
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',

            borderRadius: Radius.typeButton_4,

            marginTop:8
        },
        reserve_button_text: {
            fontFamily: 'IRANSansMobile(FaNum)',
            color: '#fff',
            fontSize: 14,
            marginVertical: 8
        },
    });
};

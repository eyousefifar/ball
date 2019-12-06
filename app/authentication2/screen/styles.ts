import {StyleSheet} from 'react-native';
import {Colors} from "../../ball-library/theme";
import {widthPercentageToDP} from 'react-native-responsive-screen';


export default () => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        error_text: {
            fontSize: 12,
            color: Colors.redDiscount,
            fontFamily: 'IRANSansMobile(FaNum)'
        },
        input_container: {
            width: widthPercentageToDP('86%'),
            alignSelf: 'center'
        }
    });
};

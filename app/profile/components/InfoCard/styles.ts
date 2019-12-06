import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
 
} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library/theme';

export const actionButtonsStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    smallButton: {
      height: 42,
      borderRadius: 42 / 2,
    },

    edit_button_container: {
      width: 180,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
    },
    edit_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row-reverse',
    },
    edit_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      marginLeft: 8,
      color: '#717171',
    },

    submit_button_container: {
      flex: 1,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
      marginLeft: 8,
    },
    submit_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submit_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color: '#717171',
    },

    cancel_button_container: {
      flex: 1,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
      marginRight: 8,
    },
    cancel_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancel_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color: '#717171',
    },
  });
};
export const editInfoStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
      justifyContent: 'space-between',
    },
    fields_container: {
      paddingTop: 32,
      justifyContent: 'space-evenly',
    },

    buttons_container: {
      width: '100%',
      height: 70,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    submit_button_container: {
      flex: 1,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
      marginLeft: 8,
    },
    submit_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submit_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color: '#717171',
    },

    cancel_button_container: {
      flex: 1,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
      marginRight: 8,
    },
    cancel_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancel_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color: '#717171',
    },

    error_text: {
      fontSize: 12,
      color: Colors.redDiscount,
      fontFamily: 'IRANSansMobile(FaNum)',
    },
  });
};
export const infoStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 8,
      paddingBottom: 8,
    },
    profile_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 8,
    },
    profile_name_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 18,
      color: Colors.darkBall,
      marginTop: 16,
    },
    profile_number_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 15,
      color: Colors.titleBarLines,
    },

    edit_button_container: {
      width: 180,
      height: 45,
      backgroundColor: Colors.transparentGrey,
      borderRadius: 8,
      overflow: 'hidden',
    },
    edit_button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row-reverse',
    },
    edit_button_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      marginLeft: 8,
      color: '#717171',
    },
  });
};
export default () => {
  return StyleSheet.create({
    container: {
      width: wp('86%'),
      marginTop: hp('24%'),
      alignSelf: 'center',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      marginBottom: 16,
      elevation: 4,
      borderRadius: 16,
    },
    containerHeight50: {
      height: hp('30%'),
    },
    containerHeight90: {
      height: hp('30%'),
    },
    buttonContainer: {
      width: '100%',
      height: 72,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });
};

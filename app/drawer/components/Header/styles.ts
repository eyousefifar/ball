import {StyleSheet} from 'react-native';
import {Colors} from '../../../ball-library';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default () => {
  const styles = StyleSheet.create({
    container: {
      height: 128,
      width: '100%',
      backgroundColor: Colors.primaryPurple,
      flexDirection: 'row-reverse',
      paddingHorizontal: 4,
    },
    profileInfoContainer: {
      flex: 5,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    editProfileContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingVertical: 4,
    },
    editProfileButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'white',
      marginLeft: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },

    whiteRightAlign: {
      marginRight: 12,
      textAlign: 'right',
      color: 'white',
      fontSize: 15,
      fontFamily: 'IRANSansMobile(FaNum)',
    },
    whiteRightAlign2: {
      marginRight: 12,
      textAlign: 'right',
      color: 'white',
      fontSize: 12,
      fontFamily: 'IRANSansMobile(FaNum)',
    },
    authContainer: {
      flex: 7,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 8,
    },
    authButton: {
      width: widthPercentageToDP('36%'),

      //      borderColor: 'white'
    },

    image_container_box: {
      marginRight: 8,
    },
    user_info_container_parent: {
      width: '100%',
      height: 110,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    user_info_container: {
      flex: 1,
      paddingHorizontal: 8,
      // alignItems: 'center',
      justifyContent: 'center',
    },
    user_name_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 16,
      color: Colors.whiteBall,
      textAlign: 'right',
    },
    user_phone_text: {
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color: Colors.whiteBall,
      textAlign: 'right',
    },
  });
  const avatar = {
    size: 56,
    color: 'white',
  };
  const icon = {
    size: 18,
    color: 'white',
  };
  const rippleColor = Colors.lightGrey;
  return {styles, avatar, icon, rippleColor};
};

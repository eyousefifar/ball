import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from '../../ball-library';

export const qrCodeStyle = () => {
  const size = widthPercentageToDP('86%');
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    logoutContainer: {
      width: size,
      height: size,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.primaryPurple,
      backgroundColor: 'white',
      zIndex: 2,
    },
    title: {
      textAlign: 'center',
      height: '36%',
      width: '86%',
    },
    button: {
      width: '86%',
      height: 36,
      borderRadius: 18,
      backgroundColor: Colors.lightGrey,
    },
  });
};

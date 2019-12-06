import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from '../theme';

export default (haveMargin: boolean | undefined) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: haveMargin
        ? heightPercentageToDP('4%')
        : StyleSheet.hairlineWidth,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginVertical: haveMargin ? 4 : 0,
    },
    line: {
      height: StyleSheet.hairlineWidth,
      width: '100%',
      backgroundColor: Colors.lightPurple700,
    },
  });
};

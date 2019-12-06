import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library';

export const reserveCardStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      backgroundColor: 'white',
      elevation: 4,
      borderRadius: 16,
      marginVertical: 8,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    closestReserve: {
      height: heightPercentageToDP('60%'),
    },
    collapsed: {
      height: 86,
    },
    expanded: {
      height: 86 * 2,
    },
  });
  const rippleColor = Colors.grey;
  return {styles, rippleColor};
};

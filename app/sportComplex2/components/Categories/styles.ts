import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import memoize from 'fast-memoize';
import {Colors} from '../../../ball-library';

export default () => {
  return StyleSheet.create({
    container: {
      width: widthPercentageToDP('100%'),
      minHeight: heightPercentageToDP('12%'),
      alignItems: 'center',
      paddingHorizontal: 16,
    },
  });
};

export const categoryCardStyle = memoize(() => {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      height: heightPercentageToDP('16%'),
      borderRadius: 16,
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginVertical: 4,
    },
    caption: {
      color: Colors.primaryPurple,
      textAlign: 'right',
      marginRight: 12,
    },
    image: {
      width: widthPercentageToDP('86%'),
      height: heightPercentageToDP('12%'),
      alignSelf: 'center',
    },
  });
  const borderRadius = 16;
  return {styles, borderRadius};
});

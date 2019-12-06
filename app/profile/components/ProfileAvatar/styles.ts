import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library';

export default () => {
  const rippleColor = Colors.darkGrey;
  const size = 90;
  const borderRadius = size / 2;
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: 148,
      height: 148,
      borderRadius: 148 / 2,
      overflow: 'hidden',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      top: -heightPercentageToDP('12%'),
      backgroundColor: 'transparent',
      zIndex: 5,
    },
    profileImageContainer: {
      width: size,
      height: size,
      borderRadius: borderRadius,
      overflow: 'hidden',
    },
    iconContainer: {
      position: 'absolute',
      width: size,
      height: 18,
      backgroundColor: 'rgba(0,0,0,0.6)',
      bottom: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: size,
      height: size,
    },
  });
  return {styles, borderRadius, rippleColor};
};

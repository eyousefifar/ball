import {StyleSheet, Animated} from 'react-native';
import {Colors} from '../../../ball-library/theme';

export const collapsedCardStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      backgroundColor: 'white',
    },

    infoContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingLeft: 8,
    },
    qrCodeContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 8,
    },
  });
export const animatedArrowStyle = (
  iconRotation: Animated.AnimatedInterpolation,
) => {
  const styles = StyleSheet.create({
    container: {
      marginLeft: 8,
      marginRight: 16,
    },
  });
  const iconTransform = [
    {
      transform: [{rotate: iconRotation}, {perspective: 1000}],
    },
  ];
  const iconSize = 24;
  return {styles, iconTransform, iconSize};
};

export const infoStyle = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    titleFont14: {
      fontSize: 14,
    },
    alignRight: {
      textAlign: 'right',
    },
  });
};

export const qrCodeStyle = () => {
  return {
    size: 42,
    color: Colors.primaryPurple,
    rippleColor: Colors.grey,
  };
};

export const providerIconStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.lightGrey,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const icon = {
    size: 28,
    color: Colors.primaryPurple,
  };
  return {styles, icon};
};

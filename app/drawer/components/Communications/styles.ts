import {StyleSheet} from 'react-native';

import {Colors} from '../../../ball-library';

export default () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconsContainer: {
      width: '20%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 4,
    },
  });
  const rippleColor = Colors.grey;
  const icon = {
    size: 24,
    color: Colors.darkGrey,
  };
  return {styles, rippleColor, icon};
};

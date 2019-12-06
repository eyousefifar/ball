import {StyleSheet} from 'react-native';
import {Colors} from '../../../ball-library';

export default () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingLeft: 14,
      paddingRight: 10,
    },
    collapsedContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    plainHeight: {
      height: 56,
    },
    extendedHeight: {
      height: 120 + 56,
    },
    menuItemTitle: {fontSize: 16},
  });
  const icon = {
    size: 24,
    color: Colors.darkGrey,
  };
  return {styles, icon};
};

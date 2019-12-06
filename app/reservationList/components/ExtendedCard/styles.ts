import {StyleSheet} from 'react-native';

import {Colors} from '../../../ball-library';
import memoize from 'fast-memoize';

const ExpandedStyleFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      backgroundColor: 'white',
    },
    cancelContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 12,
    },
    button: {
      borderWidth: 1,
      borderColor: 'red',
      height: 36,
      borderRadius: 18,
    },
  });
};
export const ExpandedStyle = memoize(ExpandedStyleFn);
export const addressStyleFn = () => {
  const styles = StyleSheet.create({
    addressContainer: {
      flex: 3,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginLeft: 8,
    },
    addressText: {
      textAlign: 'right',
      width: '68%',
    },
  });
  const icon = {
    size: 28,
    color: Colors.primaryPurple,
  };
  const rippleColor = Colors.grey;
  return {styles, icon, rippleColor};
};
export const addressStyle = memoize(addressStyleFn);

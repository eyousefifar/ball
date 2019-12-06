import {StyleSheet} from 'react-native';
import {Colors} from '../../../../ball-library';

export default () => {
  return StyleSheet.create({
    container: {
      height: 120,
    },
  });
};

export const notificationItemStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row-reverse',
      alignItems: 'center',

      paddingVertical: 4,
    },
    infoContainer: {
      flex: 2,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingRight: 36,
    },
    timeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const icon = {
    size: 20,
    color: Colors.primaryPurple,
  };
  return {styles, icon};
};

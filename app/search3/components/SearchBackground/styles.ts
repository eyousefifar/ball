import { StyleSheet } from 'react-native';
import { Colors } from '../../../ball-library/theme';

export default () => {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1
    },
    coloredBackground: {
      flex: 1,
      backgroundColor: Colors.primaryPurple
    }
  });
};

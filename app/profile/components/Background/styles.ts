import { StyleSheet } from 'react-native';
import { Colors } from '../../../ball-library';

export default () => {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1
    },
    coloredSpace: {
      flex: 3,
      backgroundColor: Colors.primaryPurple
    },
    whiteSpace: {
      flex: 5,
      backgroundColor: 'white'
    }
  });
};

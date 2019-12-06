import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const styles = () => {
  return StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      height: 86 * 4,
      borderRadius: 16,
      marginVertical: 8,
      alignSelf: 'center',
      overflow: 'hidden',
      elevation: 2,
    },
    titleContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    title: {fontSize: 14},
  });
};
export const emptyStyle = () => {
  return StyleSheet.create({
    container: {
      height: 112,
      width: '100%',

      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '86%',
      height: '72%',
      elevation: 4,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
export default styles;

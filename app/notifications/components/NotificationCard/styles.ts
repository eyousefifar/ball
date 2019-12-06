import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library';
import {Radius} from '../../../ball-library/theme';

export default () => {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      height: heightPercentageToDP('8%'),
      borderRadius: Radius.typeButton_4,
      flexDirection: 'row-reverse',
      overflow: 'hidden',
      backgroundColor: 'white',
      marginVertical: 4,
      alignSelf: 'center',
      elevation: 2,
    },

    iconContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    messageContainer: {
      flex: 7,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 4,
    },
    timeContainer: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const icon = {
    size: 24,
    color: Colors.primaryPurple,
  };
  return {styles, icon};
};

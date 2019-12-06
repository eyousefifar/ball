import {StyleSheet} from 'react-native';

import {Colors} from '../theme';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: heightPercentageToDP('4%'),
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 16,
      marginVertical: 4,
    },
    line: {
      height: StyleSheet.hairlineWidth,
      flexGrow: 1,
      backgroundColor: Colors.titleBarLines,
    },
    captionContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 1,
      marginHorizontal: 8,
    },
    caption: {
      textAlign: 'center',
      color: Colors.primaryPurple,
    },
  });
};

export default styles;

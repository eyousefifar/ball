import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';
import { Colors } from '../../ball-library';
import {Radius} from "../../ball-library/theme";

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.whiteBall,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    image: {
      width: widthPercentageToDP('52%'),
      height: widthPercentageToDP('54%')
    },
    aboutUsTextContainer: {
      width: widthPercentageToDP('86%'),
      height: heightPercentageToDP('52%'),
      backgroundColor: Colors.primaryPurple,
      borderRadius: Radius.typeButton_4,
      overflow: 'hidden'
    },
    scrollView: {
      flex: 1
    },
    scrollPadding: {
      padding: 8
    },
    text: {
      color: Colors.whiteBall,
      textAlign: 'center'
    }
  });
};

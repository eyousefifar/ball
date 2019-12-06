import {StyleSheet} from 'react-native';
import {Colors} from '../../../ball-library';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {Radius} from '../../../ball-library/theme';

export default () => {
  const size = widthPercentageToDP('86%');
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.transparentGrey,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      width: size,
      height: size,
      borderWidth: 1,
      borderColor: Colors.primaryPurple,
      backgroundColor: 'white',
      borderRadius: Radius.typeButton_4,
      zIndex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 8,
    },
  });
};

export const rateSliderStyle = () => {
  const styles = StyleSheet.create({
    container: {flexShrink: 1, flexDirection: 'row-reverse'},
    titleContainer: {
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 16,
    },
    slideContainer: {
      flex: 3,
      justifyContent: 'center',
    },
    slider: {
      width: '100%',
    },
    sliderNumber: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    number: {
      fontSize: 8,
      textAlign: 'center',
    },
  });
  const sliderColor = {
    purple: Colors.primaryPurple,
    grey: Colors.grey,
  };
  return {styles, sliderColor};
};

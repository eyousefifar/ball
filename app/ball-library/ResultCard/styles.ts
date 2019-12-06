import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from '../theme';
import memoize from 'fast-memoize';

const resultCardStyle = () => {
  const imageSize = 56;
  const borderRadius = imageSize / 2;
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      height: 86,
      backgroundColor: 'white',
      borderColor: Colors.primaryPurple,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 16,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingHorizontal: 8,
    },
    infoContainer: {
      width: '72%',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    image: {
      width: imageSize,
      height: imageSize,
    },
    providerTitleContainer: {
      alignItems: 'flex-end',
      justifyContent: 'space-evenly',
      marginHorizontal: 8,
    },
    title: {
      textAlign: 'right',
    },
    address: {
      width: widthPercentageToDP('42%'),
      textAlign: 'right',
      fontSize: 10,
    },
  });
  return {styles, borderRadius};
};

export default memoize(resultCardStyle);

import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../theme';

export default (mode: 'thin' | 'thick', transparent: boolean) => {
  return StyleSheet.create({
    container: {
      width: widthPercentageToDP('86%'),
      height: mode === 'thin' ? 48 : 86,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: transparent ? Colors.transparentWhite : 'white',
      marginVertical: 4,
      elevation: transparent ? 0 : 4,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText: {
      width: '100%',
      color: transparent ? 'white' : 'black',
      fontFamily:'IRANSansMobile(FaNum)',
      textAlign:'center'
    }
  });
};

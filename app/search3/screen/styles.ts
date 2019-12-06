import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';
import { Colors } from '../../ball-library';

export const searchStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    searchContainer: {
      width: '95%',
      backgroundColor: 'white',
      alignSelf: 'center',
      elevation: 2,
      borderRadius: 16,
      overflow: 'hidden'
    },
    primaryPurpleBackground: {
      backgroundColor: Colors.primaryPurple
    },
    searchArea: {
      width: widthPercentageToDP('94%'),
      height: heightPercentageToDP('10%'),
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    search_state:{
      width:'100%',
      height:200,

      paddingHorizontal:16,
      paddingVertical:8
    }
  });
};

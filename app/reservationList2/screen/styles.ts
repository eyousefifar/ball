import { StyleSheet } from 'react-native';
import {Colors} from "../../ball-library/theme";

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primaryPurple,
      paddingHorizontal: 16
    },
    reserveList_container:{
      width: '100%',
      backgroundColor: '#fefefe',
      alignSelf: 'center',
      elevation: 2,
      borderRadius: 16,
      overflow: 'hidden',
      paddingHorizontal:8,
      paddingVertical:16
    },
    reserveList_header_text:{
      fontFamily:'IRANSansMobile(FaNum)',
      fontSize:14,
      color:'#717171',
      alignSelf: 'center'
    },
  });
};

import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    more_info:{
      width:'100%',
      alignItems:'center',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
    more_info_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 10,
    }
  });
};

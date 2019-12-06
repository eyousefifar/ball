import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({

    header_container: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    header_list_text: {
      fontSize: 14,
      fontFamily: 'IRANSansMobile(FaNum)',
      color: '#212121'
    },
  });
};

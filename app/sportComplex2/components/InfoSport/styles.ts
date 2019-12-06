import { StyleSheet } from 'react-native';


export default () => {
  return StyleSheet.create({
    container:{
      flexDirection:'row-reverse',
      justifyContent:'space-between',
      width:'100%',
      paddingHorizontal:16,
      marginTop:8,
      marginBottom:24

    },

    address_box_container:{
      flexDirection:'row-reverse',
      maxWidth:170,
      height: '100%',
    },
    address_label_container:{
      height:'100%'
    },
    address_label_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 12,
      color:'#484848'
    },

    address_container:{
      height:'100%'
    },
    address_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 12,
      color:'#484848'
    },


    button_container:{
      flexDirection: 'row-reverse',
      paddingHorizontal: 8,
      paddingVertical:4,
      backgroundColor:'#7200ca',
      borderRadius:4
    },
    button_text:{
      fontFamily:'IRANSansMobile(FaNum)_Medium',
      color:'#fff',
      fontSize:12,
      marginRight:4
    }

  });
};

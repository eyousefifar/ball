import { StyleSheet } from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";

export default () => {
  return StyleSheet.create({
    container:{
      width:'100%',
      paddingHorizontal:24,
      marginTop:8,
      marginBottom:16
    },

    icons_container:{
      width: '100%',
      height:35,

      // backgroundColor:'red',

      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
    },

    icon_container:{
      alignItems: 'center',
      justifyContent: 'center',

      marginHorizontal: 8
    },

    address_box_container:{
      width:'100%',
      // height:35,
      // backgroundColor: 'yellow',
      // marginBottom: 4

    },
    address_label_container:{},
    address_label_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 14,
      color:Colors.titleBarLines
    },

    address_container:{
      // height:'100%'
    },
    address_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 12,
      color:Colors.grayBall
    },


    button_container:{
      flexDirection: 'row-reverse',
      paddingHorizontal: 8,
      paddingVertical:4,
      backgroundColor:'#7200ca',
      borderRadius: Radius.typeButton_4,
    },
    button_text:{
      fontFamily:'IRANSansMobile(FaNum)_Medium',
      color:'#fff',
      fontSize:12,
      marginRight:4
    }

  });
};

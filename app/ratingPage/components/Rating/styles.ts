import { StyleSheet } from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
  return StyleSheet.create({
    container: {
      width: '90%',
      backgroundColor:'#fefefe',

      alignItems: 'center',
      alignSelf: 'center',

      paddingHorizontal: 16,
      paddingTop:8,
      paddingBottom:16,

      borderRadius: Radius.typeButton_4,

      marginVertical: 16,
    },
    progressBarContainer: {
      width: '100%',
      flexDirection: 'row-reverse',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical: 4,
      // backgroundColor:'red'
    },
    ratting_field:{
      width:'100%',
      flexDirection: 'row-reverse',
      justifyContent:'space-between',
      alignItems:'center'
    },
    ratting_text:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize:11,
      color:'#212121'
    },

    comment_box:{
      width:'100%',
      height:100,
      borderRadius: Radius.typeButton_4,
      borderColor: '#7200ca',
      borderWidth: 1,
      marginTop:12,
      marginBottom: 6
    },
    comment_input:{
      fontFamily: 'IRANSansMobile(FaNum)',
      fontSize: 12,
      paddingHorizontal:16,
      textAlign:'right'
    },
    submit_button:{
      width:'100%',
      borderRadius: Radius.typeButton_4,
      height:30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7200ca',
      marginTop: 4
    },
    submit_text:{
      fontFamily: 'IRANSansMobile(FaNum)_Medium',
      fontSize: 13,
      marginVertical: 4,
      color:'#fff'
    },

    error_text:{
      fontSize:12,
      color:Colors.redDiscount,
      fontFamily:'IRANSansMobile(FaNum)'
    },


  });
};

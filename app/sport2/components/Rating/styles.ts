import { StyleSheet } from 'react-native';

import {Colors, Radius} from "../../../ball-library/theme";

export default () => {
  return StyleSheet.create({
    container: {
      width: '90%',
      borderRadius: Radius.typeButton_4,
      backgroundColor:'#fefefe',
      alignItems: 'center',
      alignSelf: 'center',

      // paddingVertical: 4,
      paddingHorizontal: 8,

      marginBottom: 8,
      borderWidth:0.6,
      borderColor:'rgba(0,0,0,0.4)'
    },

    rating_container:{
      width:'100%',
      // height: 200,
    },
    rating_row:{
      width:'100%',
      flexDirection:'row-reverse',

      justifyContent:'space-between',

      // backgroundColor:'green',
      marginBottom:4
    },
    rating_section:{
      width:'48%',
      // paddingLeft:8,

      // backgroundColor:'brown',

      flexDirection:'row-reverse',
      justifyContent:'space-between'
    },
    star_container:{
      flexDirection:'row-reverse',

    },
    rating_text:{
      fontFamily:'IRANSansMobile(FaNum)',
      color:Colors.titleBarLines,
      fontSize:11
    },
    rate_number:{
      fontFamily:'IRANSansMobile(FaNum)',
      color:Colors.titleBarLines,
      fontSize:12,
      marginLeft:4
    },

    score_btn:{
      width:'100%',
      height:30,

      backgroundColor:Colors.primaryPurple,
      borderRadius:Radius.typeButton_4,

      alignItems: 'center',
      justifyContent: 'center',

      marginVertical:8
    },
    score_btn_text:{
      fontFamily:'IRANSansMobile(FaNum)',
      color:Colors.whiteBall,
      fontSize:14,
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

    submit_button: {
      alignSelf:'flex-start',
      backgroundColor:'#7200ca',
      borderRadius: 4,
      marginTop:16,
      alignItems: 'center',
      justifyContent: 'center'
    },
    submit_rating_text:{
      fontFamily:'IRANSansMobile(FaNum)_Medium',
      fontSize: 12,
      color: '#fff',
      marginVertical:4,
      marginHorizontal:16
    },


  });
};

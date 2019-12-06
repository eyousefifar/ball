import { StyleSheet, Dimensions } from 'react-native';
import {Radius} from "../../../ball-library/theme";

export default () => {
  const {width} = Dimensions.get('window');
  const item_height = width * 5.5 / 10 ;

  return StyleSheet.create({
    box_carousel:{
      width:'100%',
      height:'100%',
      justifyContent: 'flex-end',
      alignItems:'flex-start',
      paddingBottom:16,
      paddingLeft:16
    },
    image_background:{
      width: '100%',
      height: item_height,
      overflow:'hidden',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      borderRadius: Radius.typeButton_4
    },
    footer_text_container:{
      borderWidth:1,
      borderRadius:Radius.typeButton_4,
      borderColor:'rgba(0,0,0,0.5)',
      paddingVertical:4,
      paddingHorizontal: 12,
    },
    footer_text:{
      fontSize:13,
      color:'#818181',
      fontFamily:'IRANSansMobile(FaNum)_Medium'
    }
  });
};
